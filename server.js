const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const path = require("path");
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweet/random", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    },
    params: { count: 100,
      tweet_mode: "extended",
      lang: "en",
      include_rts: true
    }
  };
  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + req.query.favorite, config)
    .then(twitterResponse => {
  
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get("/api/tweet/user", (req, res) => {

  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    },
    params: {
      count: 10,
      tweet_mode: "extended",
      include_rts: true,
      result_type: "recent"
    }
  };
  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + req.query.screenname, config)
    .then(twitterResponse => {
      res.send(twitterResponse.data);
    })
    .catch(err => {
    res.status(401).send(err);
    res.status(500).send(err);
    });
}); 

app.get("/api/tweet/topic", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    },
    params: {
      count: 10,
      tweet_mode: "extended",
      lang: "en",
      result_type: "recent"
    }
  };

  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=" + req.query.topicname, config)
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
