import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import Eckhart from "./images/AUcTAQC7_normal.jpg";
import Questlove from "./images/QIV6c_-D_normal.jpg";
import Yuval from "./images/9GqAdkNk_normal.jpg"
import ReTweet from "./images/retweet-action.png";
import Like from "./images/like-action.png";
import axios from "axios";

class Random extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  getEckhartTolle = () => {
    axios.get("/api/tweet/random/eckhart")
    .then(res => {
      this.setState({
        user: res.data
      },
      function() {
      console.log(this.state.user);
      });
    });
  };

  getQuestlove = () => {
    axios.get("/api/tweet/random/questlove")
    .then(res => {
      this.setState({
        user: res.data.statuses
      },
      function() {
      console.log(this.state.user);
      });
    });
  };

  getYuval = () => {
    axios.get("/api/tweet/random/yuval")
    .then(res => {
      this.setState({
        user: res.data.statuses
      },
      function() {
      console.log(this.state.user);
      });
    });
  };

  
  render() {
    const tweetRows = this.state.user.map(users => (
      <Container className="tweet-card">
      <Row className="d-block tweet-row">
      <Col className="tweet-col">
        <Image className="d-inline mt-2 mr-1 ml-1" src={users.user.profile_image_url} />
        <h6 className="d-inline real-name ml-1 mt-1">
          <strong>{users.user.name}</strong>
        </h6>
        <p className="d-inline ml-2 user-handle">@{users.user.screen_name}</p>
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
      <Container className="container-random">
      <Row>
      <Col>
        <h4 className="text-center mt-3 choose-text">
          Choose from one of my <strong>5</strong> favorite twitter users to
          see <strong>10</strong> of their random tweets.
        </h4>
      </Col>
    </Row>
    <br />
    <Row className="card-row">
      <Col className="col-4">
        <button className="d-block btn btn-warning" onClick={this.getEckhartTolle} size="lg">
          <Image className="d-inline mr-2 reid-random" src={Eckhart} />
          <h6 className="d-inline real-name-random-one text-left">
            <strong>Eckhart Tolle</strong>
          </h6>
          <p className="d-block user-name-random ml-5">@EckhartTolle</p>
        </button>
      </Col>
      <Col className="col-4">
        <button className="d-block btn btn-warning" onClick={this.getQuestlove} size="lg">
          <Image className="d-inline mr-2 reid-random" src={Questlove} />
          <h6 className="d-inline real-name-random-one text-left">
            <strong>?NG Shamen</strong>
          </h6>
          <p className="d-block user-name-random ml-5">@questlove</p>
        </button>
      </Col>
      <Col className="col-4">
        <button className="d-block btn btn-warning" onClick={this.getYuval} size="lg">
          <Image className="d-inline mr-2 reid-random" src={Yuval} />
          <h6 className="d-inline real-name-random-one text-left">
            <strong>Yuval Noah Harari</strong>
          </h6>
          <p className="d-block user-name-random ml-5">@hurari_yuval</p>
        </button>
      </Col>
      <Col className="col-4">
        <button className="d-block btn btn-warning" size="lg">
          <Image className="d-inline mr-2 reid-random" src={Eckhart} />
          <h6 className="d-inline real-name-random-one text-left">
            <strong>Reid Muchow</strong>
          </h6>
          <p className="d-block user-name-random ml-5">@ReidMuchow</p>
        </button>
      </Col>
      <Col className="col-4-5">
        <button className="d-block btn btn-warning" size="lg">
          <Image className="d-inline mr-2 reid-random" src={Eckhart} />
          <h6 className="d-inline real-name-random-one text-left">
            <strong>Reid Muchow</strong>
          </h6>
          <p className="d-block user-name-random ml-5">@ReidMuchow</p>
        </button>
      </Col>
    </Row>
        <br />
        <br />
        <br />
        
        {tweetRows}
        <br />
      </Container>
    );
  }
}

export default Random;
