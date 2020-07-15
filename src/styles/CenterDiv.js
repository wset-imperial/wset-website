import React from "react";
import styled from "styled-components";

/* White box inside each page for content. */
const CenterDiv = styled.div`
    position: relative;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-top: 1.5rem;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    background-color: #fff;
    border-radius: 1%;
    min-height: 30rem; 
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 6px 0px #999;
    
    @media(max-width: 750px){
      width: 85%
    }
`
export default CenterDiv;

