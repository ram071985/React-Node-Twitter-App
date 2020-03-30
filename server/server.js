const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "../client/build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

axios
  .get("https://api.twitter.com/1.1/search/tweets.json")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
