import React, {Component} from "react";
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';

const HomepageItem = (props) => {
  return(
    <div>
      <Divider variant="middle" />
      <Title>{props.title}</Title>
      <Info>{props.info}</Info>
      {
        props.image &&
        <ImageDiv>
          <Image src={props.image} alt="Image"/>
        </ImageDiv>
      }
      <Date>{"Posted on " + props.date}</Date>
    </div>
  )
}

export default HomepageItem;

const Title = styled.h3`
  color:#d52f5a;
  font-weight: bold;
  text-align: left;
  font-size: 1.3em;
  @media(min-width: 768px){
    font-size: 1.5em;
  }
`

const Info = styled.p`
  color: #043c7c;
  font-size: 1em;
  text-align: left;
  
  @media(min-width: 768px){
    font-size: 1.2em;
  }
`

const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img`
  height: auto;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  padding-bottom: 0.5em;
`;

const Date = styled.p`
  color: #043c7c;
  font-size: 0.85em;
  text-align: right;
  margin-bottom: 0rem;
  opacity: 0.85;
  padding-bottom: 1em;
  
  @media(min-width: 768px){
    font-size: 1em;
  }
`