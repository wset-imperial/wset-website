import React from "react";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';

const sponsor = (props) => {
  return(
    <TextDiv>
      <Divider variant="middle"/>
      <a
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={props.image}/>
      </a>
      <Paragraph>
        {props.info} <br/> <br/>
        <a
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to find out more.
        </a>
      </Paragraph>
    </TextDiv>

  )
}

export default sponsor;

const Image = styled.img`
  max-width: 30vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
    position: relative;

`;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Paragraph = styled.p`
  color: black;
  font-size: 1.1em;
  text-align: center;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`