import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
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