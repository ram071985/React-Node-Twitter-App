import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import Eckhart from "./images/AUcTAQC7_normal.jpg";
import Questlove from "./images/QIV6c_-D_normal.jpg";
import Yuval from "./images/9GqAdkNk_normal.jpg";
import Stevie from "./images/wMhuZJ8S_normal.jpg"
import Bob from "./images/FzX7v4zh_normal.jpg"
import ReTweet from "./images/retweet-action.png";
import Like from "./images/like-action.png";
import axios from "axios";
import moment from "moment"

class Random extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      randomUsers: [
        {name: 'Eckhart Tolle', username: 'eckharttolle', src: Eckhart },
        {name: 'Questlove', username: 'questlove', src: Questlove },
        {name: 'Yuval Harari', username: 'harari_yuval', src: Yuval },
        {name: 'Stevie Wonder', username: 'StevieWonder', src: Stevie },
        {name: 'Bob Marley', username: 'bobmarley', src: Bob }
      ]
    };
  }

  getRandomTweet = (username) => {
    axios
    .get("/api/tweet/random", {
      params: {
        favorite: username,
      }
    })
    .then(res => {
      this.setState(
        {
          user: [res.data],
        },
      );
    });
  }

  render() {
    const tweetRows = this.state.user.map((users, index) => (
      <Container key={index} className="tweet-card">
        <Row className="d-block tweet-row">
          <Col className="tweet-col">
            <Image
              className="d-inline mt-2 mr-1 ml-1"
              src={users.user.profile_image_url}
            />
            <h6 className="d-inline real-name mt-1">
              <strong>{users.user.name}</strong>
            </h6>
            <p className="d-inline ml-1 user-handle">
              @{users.user.screen_name}
            </p>
            <p className="d-inline ml-1 tweet-date">{moment(users.created_at).format("MMM DD YY").toString()}</p>
            <p className="d-block tweet-text">{users.full_text}</p>
            <Image className="d-block retweet-image" src={ReTweet} />
            <p className="retweet-num">{users.retweet_count}</p>
            <Image className="d-block like-image" src={Like} />
            <p className="like-num">{users.favorite_count}</p>
          </Col>
        </Row>
      </Container>
    ));

    const cards = this.state.randomUsers.map((randomUser, index) => {
        return (
          <Col key={index} className="col-4">
          <button
            className="d-block btn btn-warning eckhart-random"
            onClick={(e) => { this.getRandomTweet(randomUser.username)} }
            size="lg"
          >
            <Image className="d-inline" src={randomUser.src} />
            <h6 className="d-block text-center real-name-random-one text-left">
              <strong>{randomUser.name}</strong>
            </h6>
          </button>
        </Col>
        )
    });

    return (
      <Container fluid className="container-random">
        <Row>
          <Col>
            <h4 className="text-center mt-3 choose-text">
              Choose from one of my <strong>5</strong> favorite twitter users to
              see <strong>1</strong> of their random tweets.
            </h4>
          </Col>
        </Row>
        <Row>{cards}</Row>
        {tweetRows}
        <br />
      </Container>
    );
  }
}

export default Random;
