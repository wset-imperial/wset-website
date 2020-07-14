import React from 'react'
import styled from "styled-components";
import logo from "../../images/logo.gif";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: auto 0;
`;