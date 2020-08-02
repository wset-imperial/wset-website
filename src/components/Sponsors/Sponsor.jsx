import React from "react";
import Divider from '@material-ui/core/Divider';
import {TextDiv, Image, Paragraph} from "./StyledSponsorComponents";
import Fade from "react-reveal/Fade";

const sponsor = (props) => {
  return (
    <TextDiv>
      <Fade right cascade>
        <Divider variant="middle"/>
        <a
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={props.image}/>
        </a>
        <Paragraph>
          {props.info} <br/>
          <a
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to find out more.
          </a>
        </Paragraph>
      </Fade>
    </TextDiv>

  )
}

export default sponsor;