import React from "react";
import styled from "styled-components";

const UpcomingEvent = (props) => {
  return(
    <div>
      <Title>{props.name}</Title>
      <Date>{props.date} <br/> {props.location}</Date>
      <Info>{props.info}</Info>
      <a
        href={props.fblink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to find out more.
      </a>
    </div>
  )
}

export default UpcomingEvent;

const Title = styled.h3`
  color:#6a1026;
  font-weight: bold;
  text-align: left;
  font-size: 1.3em;
  @media(min-width: 768px){
    font-size: 1.5em;
  }
`

const Info = styled.p`
  color: black;
  font-size: 1em;
  text-align: left;
  
  @media(min-width: 768px){
    font-size: 1.2em;
  }
`

const Date = styled.p`
  color: black;
  font-size: 1em;
  font-style: italic;
  text-align: left;
  margin-bottom: 0rem;
  opacity: 0.85;
  padding-bottom: 0.5em;
  margin: 0;
`