import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./index.css";
import ReTweet from "./images/retweet-action.png";
import Like from "./images/like-action.png";
import axios from "axios";
import moment from "moment";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: [],
      entry: "",
      errorMessage: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errorMessage: "",
    });
  };

  getUserHandle = () => {
    axios
      .get("/api/tweet/user", {
        params: { screenname: this.state.entry },
      })
      .then((res) => {
        this.setState({
          query: res.data,
          errorMessage: "",
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            query: [],
            errorMessage:
              "Incorrect user handle/user handle does not exist.  Please try another search.",
          });
        } else {
          this.setState({
            query: [],
            errorMessage:
              "Whoops!  Something went wrong... Please refresh the browser and try your search query again.",
          });
        }
      });
  };

  getTopic = () => {
    axios
      .get("/api/tweet/topic", {
        params: { topicname: this.state.entry },
      })
      .then((res) => {
        if (res.data.statuses.length >= 1) {
          this.setState({
            query: res.data.statuses,
          });
        } else {
          this.setState({
            query: [],
            errorMessage: "No results for topic.  Please try another query.",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            query: [],
            errorMessage: "There was no input.  Please type a valid query.",
          });
        } else {
          this.setState({
            query: [],
            errorMessage:
              "Whoops!  Something went wrong... Please refresh the browser and try your search query again.",
          });
        }
      });
  };

  clearForms = () => {
    this.setState({
      entry: "",
    });
  };

  handleError = () => {
    return (
      <div>
        <h5 className="error-message">{this.state.errorMessage}</h5>
        <br />
      </div>
    );
  };

  render() {
    return (
      <Container fluid>
        <br />
        <br />
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                className="control-form"
                type="input"
                name="entry"
                onChange={this.handleChange}
                placeholder="Search Twitter..."
              />
            </Form.Group>
            {this.handleError()}
            <Button
              as="input"
              type="button"
              className="handle-button"
              onClick={this.getUserHandle}
              placeholder="Search By User Handle"
            />
            <Button
              className="topic-button"
              as="input"
              onClick={this.getTopic}
              type="button"
              placeholder="Search By Topic"
            />
          </Col>
        </Row>
        <br />
        {this.state.query.map((users, index) => (
          <Container key={index} className="tweet-card">
            <Row className="d-block tweet-row">
              <Col className="tweet-col">
                <Image
                  className="d-inline mt-2 mr-1 ml-1"
                  src={users.user.profile_image_url}
                />
                <h6 className="d-inline real-name ml-1 mt-1">
                  <strong>{users.user.name}</strong>
                </h6>
                <p className="d-inline ml-2 user-handle">
                  @{users.user.screen_name}
                </p>
                <p className="d-inline ml-2 user-handle">
                  {moment(users.created_at).format("MMM DD").toString()}
                </p>
                <p className="d-block tweet-text">{users.full_text}</p>
                <Image className="d-inline retweet-image" src={ReTweet} />
                <p className="d-inline retweet-num">{users.retweet_count}</p>
                <Image className="d-inline like-image" src={Like} />
                <p className="d-inline like-num">{users.favorite_count}</p>
              </Col>
            </Row>
          </Container>
        ))}
        <br />
      </Container>
    );
  }
}

export default Search;
