const express = require("express");
const app = express();
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
<<<<<<< HEAD
      res.status(401).send(err);
      res.status(500).send(err);
      res.status(304).send(err);
=======
      res.status(500).send(err);
>>>>>>> 9a8de5d85c036c8c93a60a70dd0166dff797c695
    });
});


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});



<<<<<<< HEAD
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
=======
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// data returning endpoint
// send http request to my endpoint 
//get the data back and console it
// display data in ui
//display data in ui and in table /etc.
>>>>>>> 9a8de5d85c036c8c93a60a70dd0166dff797c695
