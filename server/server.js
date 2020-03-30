const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
import axios from "axios";


app.use("/", express.static(path.join(__dirname, "../client/build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

class TwitterSearch extends Component {
    async componentDidMount() {
      const twitterResponse = await axios.get(
        "https://api.twitter.com/1.1/search/tweets.json"
      );
      console.log(twitterResponse);
    }
  }
  
  export default TwitterSearch;
