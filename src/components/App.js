import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/styles.css";

// Components
import StartScreen from "./StartScreen";
// import QuetionEnter from "./QuestionEnter";
import NavBar from "./NavBar";

// let buttonHoverLi;

class App extends Component {
  componentDidMount() {
    // buttonHoverLi = require("./buttonHoverLi");
    // buttonHoverLi.optionsHover();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/" component={StartScreen} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
