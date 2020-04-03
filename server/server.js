const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "../client/build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

config = () => {
  headers: {
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAO23DAEAAAAA0UvE62fUsmqWWFM3F3xuCh5QFAY%3D9CVBej4ed4zQYI0sxVxHSa2m8ILnOQ5W2AegDWjJo0yBvgg1VV'
  }
}
app.get("/api/tweet/random", (req, res) => {
  axios.get('https://api.twitter.com/1.1/search/tweets.json?screen-name=ericandre', config
  )
  .then(res => console.log(res)) 
  .catch(err => console.error(err));

  
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

