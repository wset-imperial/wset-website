import React from "react";
import {Title, Date, Info} from "./StyledEventComponents";
import Fade from "react-reveal/Fade";

const UpcomingEvent = (props) => {
  return (
    <Fade right cascade>
      <Title>{props.name}</Title>
      <Date>{props.date} <br/> {props.location}</Date>
      <Info>{props.info}
        <br/>
        <a
          href={props.fblink}
          target="_blank"
          rel="noopener noreferrer"
          style={{paddingBottom: "1em"}}
        >
          Click here to find out more.
        </a>
      </Info>
    </Fade>
  )
}

export default UpcomingEvent;