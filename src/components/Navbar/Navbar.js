import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from './CollapseMenu'

const Navbar = (props) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.slow,
    });

    return(
      <div>
          <NavBar style={barAnimation}>
              <FlexContainer>
                  <Brand />
                  <NavLinks style={linkAnimation}>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/Events">Events</NavLink>
                      <NavLink to="/Sponsors">Sponsors</NavLink>
                      <NavLink to="/About-Us">About Us</NavLink>
                      <NavLink to="/Contact-Us">Contact Us</NavLink>
                  </NavLinks>
                  <BurgerWrapper>
                      <BurgerMenu
                        navbarState={props.navbarState}
                        handleNavbar={props.handleNavbar}
                      />
                  </BurgerWrapper>
              </FlexContainer>
          </NavBar>
        <CollapseMenu
          navbarState={props.navbarState}
          handleNavbar={props.handleNavbar}
        />
      </div>
    )
}

export default Navbar;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #6a1026;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #013f7a;
      border-bottom: 1px solid #013f7a;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #f4e7e7;
  z-index: 1;
  font-size: 1.4rem;
`;