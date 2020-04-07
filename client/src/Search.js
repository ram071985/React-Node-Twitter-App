import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import './index.css';
import ReTweet from "./images/retweet-action.png"
import Like from "./images/like-action.png"

class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: [],
      entry: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
  this.setState({ [name]: value} );
 console.log(this.state.entry);
  };

  render() {
    const tweetRows = this.state.query.map(users => (
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
        <Container>
          <br />
          <br />
            <Row>
                <Col>
                <Form.Group>
                <Form.Control className="control-form" type="input" value={this.state.entry} name="entry" onChange={this.handleChange} placeholder="Search Twitter..." />
                </Form.Group>
                <Button as="input" type="button" value="Search By User Handle" />
                <Button className="d-inline ml-5 topic-button" as="input" type="button" value="Search By Topic" />
                </Col>
            </Row>
            <br />
             {tweetRows}
            <br />
        </Container>
    )
  }
}

export default Search;
