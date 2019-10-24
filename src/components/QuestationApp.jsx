import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestationApp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Question App</h1>
        <Link to="/">Back to start</Link>
      </React.Fragment>
    );
  }
}

export default QuestationApp;
