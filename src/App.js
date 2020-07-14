import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{backgroundColor:"black"}}>
          <Navbar navbarState={this.state.navbarOpen}
                  handleNavbar={this.handleNavbar} />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/Events' component={Events} />
            <Route path='/Sponsors' component={Sponsors} />
            <Route path='/About-Us' component={AboutUs} />
            <Route path='/Contact-Us' component={ContactUs} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App