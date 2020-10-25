import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="Container">
        <div className="col-lg-2" id="logodiv">
          <Link to="/"><img src="/99.png" /></Link></div>

        <div id="contentdiv">
          <nav id="maindiv" class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon className="navbar-toggler-icon " icon={faBars}></FontAwesomeIcon>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a></a>
                </li>
                <li class="nav-item">
                  <Link to="/surahlist" id="quran">THE HOLY QURAN</Link>
                </li>
                <li class="nav-item">
                  <Link to="/hadith" id="hadith" href="#">THE HADITH</Link>
                </li>
                <li class="nav-item">
                  <Link to="/mosques" id="mosques" href="#">MOSQUES</Link>
                </li>
                <li class="nav-item">
                  <Link to="/naats" id="naat" href="#">NAAT PLAYER</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" id="about" href="#">ABOUT 99</Link>
                </li>
              </ul>

            </div>
          </nav>
        </div>

      </div>
    )
  }
}
export default Navbar;
