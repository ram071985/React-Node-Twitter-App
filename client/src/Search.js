import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import './index.css';
import Reid from "./images/reid.png";
import ReTweet from "./images/retweet-action.png"
import Like from "./images/like-action.png"
import axios from "axios";

class Search extends Component {

async componentDidMount() {
  const twitterResponse = await axios.get('https://api.twitter.com/1.1/search/tweets.json')
  console.log(twitterResponse);
};

  render() {
    return (
        <Container>
          <br />
          <br />
            <Row>
                <Col>
                <Form.Group>
                <Form.Control className="control-form" type="input" placeholder="Search Twitter..." />
                </Form.Group>
                <Button as="input" type="button" value="Search By User Handle" />
                <Button className="d-inline ml-5 topic-button" as="input" type="button" value="Search By Topic" />
                </Col>
            </Row>
            <br />
            <Row className="tweet-row">
              <Col>
              <Image className="d-inline mt-1 mr-1 ml-1" src={Reid} />
              <h6 className="d-inline real-name ml-1 mt-1"><strong>Reid Muchow</strong></h6>
              <p className="d-inline ml-2 user-handle">@ReidMuchow</p>
              <p className="d-block tweet-text">Hey all, I feel like I've been living under a rock.  It's been ages since I've been on twitter.</p>
              <Image className="d-block retweet-image" src={ReTweet}/>
              <p className="retweet-num">20</p>
              <Image className="like-image" src={Like} />
              <p className="like-num">15</p>
              </Col>
            </Row>
            <br />
        </Container>
    )
  }
}

export default Search;
