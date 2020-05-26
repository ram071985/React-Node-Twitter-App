const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");
const axios = require("axios");
const tokenService = require("./tokenService.js");

app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweet/random", async (req, res) => {
  const config = {
    headers: {
      Authorization:
        `Bearer ${await tokenService.getToken()}`
    },
    params: { count: 100,
      tweet_mode: "extended",
      lang: "en",
      include_rts: true,
      screen_name: req.query.favorite
    }
  };

  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json", config)
    .then(twitterResponse => {
      const randNumber = Math.floor(Math.random() * twitterResponse.data.length)
      const randTweet = twitterResponse.data[randNumber];
      res.send(randTweet);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get("/api/tweet/user", async (req, res) => {
  const config = {
    headers: {
      Authorization:
      `Bearer ${await tokenService.getToken()}`
    },
    params: {
      count: 10,
      tweet_mode: "extended",
      include_rts: true,
      result_type: "recent",
      screen_name: req.query.screenname
    }
  };

  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json", config)
    .then(twitterResponse => {
      res.send(twitterResponse.data);
    })
    .catch(err => {
    res.status(401).send(err);
    res.status(500).send(err);
    });
}); 

app.get("/api/tweet/topic", async (req, res) => {
  const config = {
    headers: {
      Authorization:
      `Bearer ${await tokenService.getToken()}`
    },
    params: {
      count: 10,
      tweet_mode: "extended",
      lang: "en",
      result_type: "recent",
      q: req.query.topicname
    }
  };

  axios
    .get("https://api.twitter.com/1.1/search/tweets.json", config)
    .then(twitterResponse => {
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(401).send(err);
      res.status(500).send(err);
      res.status(304).send(err);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
