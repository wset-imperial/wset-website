import React from "react";
import styled from "styled-components";

const PastEvent = (props) => {
  return(
    <div>
      <Title>{props.name}</Title>
      <Date>{props.date}</Date>
      <Info>{props.info}</Info>
    </div>
  )
}

export default PastEvent;

const Title = styled.h3`
  color:#6a1026;
  font-weight: bold;
  text-align: left;
  font-size: 1.3em;
  padding-top: 0.5em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 1.5em;
  }
`

const Info = styled.p`
  color: black;
  font-size: 1em;
  text-align: left;
  padding-bottom: 0.5em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 1.2em;
  }
`

const Date = styled.p`
  color: black;
  font-style: italic;
  font-size: 1em;
  text-align: left;
  opacity: 0.85;
  padding-bottom: 0.5em;
  margin: 0;
`