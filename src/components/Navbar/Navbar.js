import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component{
  render() {
    return(
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Events">Events</NavLink>
        <NavLink to="/Sponsors">Sponsors</NavLink>
        <NavLink to="/About-Us">About Us</NavLink>
        <NavLink to="/Contact-Us">Contact Us</NavLink>
      </div>
    )
  }
}

export default Navbar;