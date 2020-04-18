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
      user: []
    };
  }

  getEckhartTolle = () => {
    axios
      .get("/api/tweet/random", {
        params: {
          favorite: "eckharttolle"
        }
      })
      .then(res => {
        const randNumber = Math.floor(Math.random() * res.data.length)
        const randTweet = res.data[randNumber]
        
        console.log(randTweet);
        this.setState(
          {
            user: [randTweet]
          },
          function() {
            console.log(this.state.user);
          }
        );
      });
  };

  getQuestlove = () => {
    axios
      .get("/api/tweet/random", {
        params: {
          favorite: "questlove"
        }
      })
      .then(res => {
        const randNumber = Math.floor(Math.random() * res.data.length)
        const randTweet = res.data[randNumber]
        
        console.log(randTweet);
        this.setState(
          {
            user: [randTweet]
          },
          function() {
            console.log(this.state.user);
          }
        );
      });
  };

  getYuval = () => {
    axios
      .get("/api/tweet/random", {
        params: {
          favorite: "harari_yuval"
        }
      })
      .then(res => {
        const randNumber = Math.floor(Math.random() * res.data.length)
        const randTweet = res.data[randNumber]
        
        console.log(randTweet);
        this.setState(
          {
            user: [randTweet]
          },
          function() {
            console.log(this.state.user);
          }
        );
      });
  };

  getStevie = () => {
    axios
      .get("/api/tweet/random", {
        params: {
          favorite: "StevieWonder"
        }
      })
      .then(res => {
        const randNumber = Math.floor(Math.random() * res.data.length)
        const randTweet = res.data[randNumber]
        
        console.log(randTweet);
        this.setState(
          {
            user: [randTweet]
          },
          function() {
            console.log(this.state.user);
          }
        );
      });
  };

  getBob = () => {
    axios
      .get("/api/tweet/random", {
        params: {
          favorite: "bobmarley"
        }
      })
      .then(res => {
        const randNumber = Math.floor(Math.random() * res.data.length)
        const randTweet = res.data[randNumber]
        
        console.log(randTweet);
        this.setState(
          {
            user: [randTweet]
          },
          function() {
            console.log(this.state.user);
          }
        );
      });
  };

  render() {
    const tweetRows = this.state.user.map(users => (
      <Container className="tweet-card">
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

    return (
      <Container fluid className="container-random">
        <Row>
          <Col>
            <h4 className="text-center mt-3 choose-text">
              Choose from one of my <strong>5</strong> favorite twitter users to
              see <strong>10</strong> of their random tweets.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col className="col-4">
            <button
              className="d-block btn btn-warning eckhart-random"
              onClick={this.getEckhartTolle}
              size="lg"
            >
              <Image className="d-inline" src={Eckhart} />
              <h6 className="d-block text-center real-name-random-one text-left">
                <strong>Eckhart Tolle</strong>
              </h6>
            </button>
          </Col>
          <Col className="col-4">
            <button
              className="d-inline btn btn-warning questlove-random"
              onClick={this.getQuestlove}
              size="lg"
            >
              <Image className="d-inline mr-2 questlove-random" src={Questlove} />
              <h6 className="d-block text-center real-name-random-one text-left">
                <strong>?NG Shamen</strong>
              </h6>
            </button>
          </Col>
          </Row>
          <Row>
          <Col className="col-4">
            <button
              className="d-block btn btn-warning yuval-random"
              onClick={this.getYuval}
              size="lg"
            >
              <Image className="d-inline mr-2 yuval-random" src={Yuval} />
              <h6 className="d-block text-center real-name-random-one text-left">
                <strong>Yuval Noah Harari</strong>
              </h6>
            </button>
          </Col>
          <Col className="col-4">
            <button
              className="d-block btn btn-warning stevie-random"
              onClick={this.getStevie}
              size="lg"
            >
              <Image className="d-inline mr-2 stevie-random" src={Stevie} />
              <h6 className="d-block text-center real-name-random-one text-left">
                <strong>Stevie Wonder</strong>
              </h6>
            </button>
          </Col>
          </Row>
          <Row>
          <Col className="col-4">
            <button
              className="d-block btn btn-warning bob-random"
              onClick={this.getBob}
              size="lg"
            >
              <Image className="d-inline mr-2 bob-random" src={Bob} />
              <h6 className="d-block text-center real-name-random-one text-left">
                <strong>Bob Marley</strong>
              </h6>
            </button>
          </Col>
        </Row>
        {tweetRows}
        <br />
      </Container>
    );
  }
}

export default Random;
