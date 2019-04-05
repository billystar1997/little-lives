import React, { Component } from "react";
import ListAlbum from "./components/ListAlbum";
import Album from "./components/Album";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <div className="TopDiv">
              <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/albumdetail">
                    <img src="https://cdn-images-1.medium.com/letterbox/148/36/50/50/1*b6gQ3LW4WrOb4vLDUYJkEQ.png?source=logoAvatar-263372b70195---719259652b5e" alt="LittleLives Logo" width="160" height="70" />
                  </a>
                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                  <div className="navbar-start">
                    <a className="navbar-item" href="/albumdetail">
                      Home
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="ClearBoth" />
            <h1>Welcome come back , let's add more memories !!!</h1>
            <div className="ClearBoth" />
            <Route path="/" exact component={ListAlbum} />
            <Route path="/albumdetail/:id" exact component={Album} />
            <Route path="/albumdetail/" exact component={ListAlbum} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;