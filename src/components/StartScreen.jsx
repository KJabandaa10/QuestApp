import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartScreen extends Component {
  render() {
    return (
      <div className="container">
        <section className="main">
          <div className="img-div main-flex-item">
            <img
              src={require("../img/hero/questation-q.png")}
              alt="Questation logo"
            />
          </div>
          <div className="button-div main-flex-item start-btn-div">
            <Link to="/QuestationApp">
              <button data-function="start" type="button">
                Start
              </button>
            </Link>
          </div>
          <div className="button-div main-flex-item options-btn-div">
            <button data-function="options" type="button">
              Options
            </button>
            <button
              className="options-option"
              data-function="get-started"
              type="button"
            >
              Get started
            </button>
            <button
              className="options-option"
              data-function="documentation"
              type="button"
            >
              Documentation
            </button>
            <button
              className="options-option"
              data-function="github"
              type="button"
            >
              GitHub
            </button>
            <button
              className="options-option"
              data-function="donate"
              type="button"
            >
              Donate
            </button>
          </div>
        </section>
        <section className="footer"></section>
      </div>
    );
  }
}

// // Options appear on hover
// const optionsBtn = document.querySelector("[data-function='options']");
// const hiddenButtons = [...document.querySelectorAll(".hidden")];

// function optionsHover() {
//   hiddenButtons.forEach(button => button.classList.toggle("hidden"));
// }

// optionsBtn.addEventListener("mouseenter", optionsHover);
// optionsBtn.addEventListener("click", optionsHover);

export default StartScreen;
