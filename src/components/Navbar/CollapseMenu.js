import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Home</a></li>
          <li><a href="/Events" onClick={props.handleNavbar}>Events</a></li>
          <li><a href="/Sponsors" onClick={props.handleNavbar}>Sponsors</a></li>
          <li><a href="/About-Us" onClick={props.handleNavbar}>About Us</a></li>
          <li><a href="/Contact-Us" onClick={props.handleNavbar}>Contact Us</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #fae7ec;
  position: fixed;
  z-index: 1000;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #6a1026;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #013f7a;
      border-bottom: 1px solid #013f7a;
    }
  }
`;