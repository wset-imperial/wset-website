import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Mail } from "react-feather";

const Footer = () => {
  return (
    <MainDiv>
        <Items className="rows" style={{ color: "#fae7ec" }}>
          <Name>
            &copy; &nbsp;
            {new Date().getFullYear()} Women in SET Imperial
            &nbsp;
          </Name>
          <a href={"https://www.facebook.com/ic.wset/"}>
            <Facebook color="#fae7ec" size={22} />
          </a>
          {"     "}
          &nbsp;
          <a href={"https://www.instagram.com/ic_wset/"}>
           <Instagram color="#fae7ec" size={22} />
          </a>
          {"    "}
          &nbsp;
         {" "}
          <a href={"mailto:wset@ic.ac.uk"}>
            <Mail color="#fae7ec" size={22} />
          </a>
          {"    "}
        </Items>
    </MainDiv>
  );
};
export default Footer;


const MainDiv = styled.div`
  color: #6a1026;
  background: #6a1026;
  padding-top: 1em;
  padding-bottom: 1em;
  bottom: 0;
  width: 100%;
  position: relative;
`

const Items = styled.div`
  color: #6a1026;
  align-items: center;
  text-align: center;
`

const Name = styled.div`
  padding-bottom: 0.5em;
`