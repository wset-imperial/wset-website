import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import styled from "styled-components";
import Sponsors from "./components/Sponsors/SponsorsPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./styles/globalStyles";
import Footer from "./components/Footer/Footer";


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
        <GlobalStyle />
        <MainDiv>
          <Navbar navbarState={this.state.navbarOpen}
                  handleNavbar={this.handleNavbar} />
           <PageDiv>
             <Switch>
               <Route path='/' component={Home} exact/>
               <Route path='/Events' component={Events} />
               <Route path='/Sponsors' component={Sponsors} />
               <Route path='/About-Us' component={AboutUs} />
               <Route component={Error}/>
             </Switch>
           </PageDiv>
          <Footer/>
        </MainDiv>
      </BrowserRouter>
    )
  }
}

export default App;

const MainDiv = styled.div`
 display:  flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
`

const PageDiv =  styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #efeff0;
    position:  relative;
    
    @media(max-width: 768px){
      background-color: white;
    }   
`