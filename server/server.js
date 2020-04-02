const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
//const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "../client/build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/api/tweet/random", (req, res) => {
  res.send('https://api.twitter.com/1.1/search/tweets.json?screen-name=ericandre')//send back a random tweet
  console.log(res.data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const twitter = {
  name: "Eric Andre"
};
