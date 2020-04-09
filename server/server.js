const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/api/tweet/random/eckhart", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    }
  };
  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=eckharttolle&tweet_mode=extended", config)
    .then(twitterResponse => {
  
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
app.get("/api/tweet/random/questlove", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    }
  };
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=from%3Aquestlove&count=10&result_type=recent&lang=en&tweet_mode=extended", config)
    .then(twitterResponse => {
  
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
app.get("/api/tweet/random/yuval", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    }
  };
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=from%3Aharari_yuval&count=10&result_type=recent&lang=en&tweet_mode=extended", config)
    .then(twitterResponse => {
  
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});
app.get("/api/tweet/random/user", (req, res) => {
  const config = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV"
    }
  };
  axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + req.query.screenname, config)
    .then(twitterResponse => {
      res.send(twitterResponse.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// data returning endpoint
// send http request to my endpoint 
//get the data back and console it
// display data in ui
//display data in ui and in table /etc.