import React from "react";
import { Link } from "react-router-dom";
// import qs logo

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar__component">
        <h1>Questation Logo!!!</h1>
        <Link to="/">
          <p>Back to start</p>
        </Link>
      </div>
    );
  }
}

export default NavBar;
