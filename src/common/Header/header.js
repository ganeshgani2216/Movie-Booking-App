import React, {Component } from 'react';
import './Header.css';
import logo from assets/logo.svg;
class Header extends Component {
    render() {
      return (
        <div class="header">
          <img className="siteLogo" src={SiteLogo} alt="Site Logo" />
        </div>
      );
    }
  }
  
  export default Header;