import React, { Component } from "react";
// import { render } from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import StartScreen from "./components/StartScreen";
import QuestationApp from "./components/QuestationApp";

let buttonHoverLi;

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    buttonHoverLi = require("./buttonHoverLi");
    buttonHoverLi.optionsHover();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={StartScreen} />
            <Route path="/QuestationApp" component={QuestationApp} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
