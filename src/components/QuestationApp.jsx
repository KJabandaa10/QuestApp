import React from "react";
import { Link } from "react-router-dom";

class QuestionEnter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Question App</h1>
        <Link to="/">Back to start</Link>
      </React.Fragment>
    );
  }
}

export default QuestionEnter;
