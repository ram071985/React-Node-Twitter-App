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
    .get("https://api.twitter.com/1.1/search/tweets.json?q=eckharttolle&screen_name=ekharttolle&result_type=popular&lang=en&tweet_mode=extended&count=10", config)
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
    .get("https://api.twitter.com/1.1/search/tweets.json?q=questlove&result_type=popular&screen_name=questlove&lang=en&tweet_mode=extended&count=10", config)
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
    .get("https://api.twitter.com/1.1/search/tweets.json?q=@harari_yuval&result_type=popular&lang=en&tweet_mode=extended&count=10", config)
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