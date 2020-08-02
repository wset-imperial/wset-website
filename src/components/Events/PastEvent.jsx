import React from "react";
import {Title, Date, Info} from "./StyledEventComponents";
import Fade from "react-reveal/Fade";

const PastEvent = (props) => {
  return (
    <Fade right cascade>
      <Title>{props.name}</Title>
      <Date>{props.date}</Date>
      <Info>{props.info}</Info>
    </Fade>
  )
}

export default PastEvent;