import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv";
import styled from "styled-components";
import CommitteeCard from "./CommitteeCard";
import CommitteeData from "./CommitteeData";
import { Card } from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive';
import Divider from "@material-ui/core/Divider";

const AboutUs = () =>{
  var itemsPerRow = 3;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  if(!isDesktopOrLaptop){
    itemsPerRow = 2;
  }
  return(
    <CenterDiv>
      <SubTitle>Current Committee</SubTitle>
      <TextDiv>
        <Card.Group itemsPerRow={itemsPerRow} centered={true}>
          {CommitteeData.map((data, index) =>
            <CommitteeCard name={data.name} image={data.image} position={data.position} fb={data.fb} linkedin={data.linkedin} key={index} />
          )}
        </Card.Group>
        </TextDiv>
        <TextDiv>
        <Divider variant={"middle"} />
        <SubTitle>Who are we?</SubTitle>
        <Paragraph>Women in Science, Engineering and Technology (WSET) is a society at Imperial College London that was founded in 2007 by three female PhD students.
          The creation of the society was the culmination of a three-year project, founded by the UK Resource Centre (UKRC) for Women in SET from 2004 to 2007,
          to encourage more female students to pursue careers within SET industries after graduating. The project was managed by Alicia Ahern
          a lecturer in Civil Engineering at Imperial College London and member of the EnVision team.</Paragraph>
          <Divider variant={"middle"} />
          <SubTitle>Past achievements and collaborations within the university</SubTitle>
          <Paragraph>In the past year our society had a significant growth in members and we believe this was a great start
            that brought us constant high numbers of attendees at all of our events. In previous years, WSET Society has
            received accolades from key figures both external and internal to Imperial College. The Arts and Cultural advisor
            to the Mayor has recognised our achievements and praised our efforts towards raising awareness about International
            Women`s Day and the President of Imperial College awarded us the prestigious ‘Society of the Year’
            award in 2009 – 2010 (out of 300 other clubs and societies).</Paragraph>
          <br/>
          <Paragraph>In the past we have collaborated with the Academic Faculty Ambassadors for Women from the faculties of
            Natural Sciences, Engineering, Medicine, and Physical Sciences, the College HR Equalities Unit, and the Student Union)
            and EnVision (the Teaching and Learning Development and Support group for the Faculty of Engineering at Imperial).
            Moreover, as a confirmation of the fact that our opinions are respected within the College and this society is a
            vital one for Imperial College, our President was invited to sit on the board of a committee created to address
            the problem of sexism within Imperial.</Paragraph>
      </TextDiv>
    </CenterDiv>
  )
}

export default AboutUs;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1em;
`
const Paragraph = styled.p` 
  margin: 0;
  color: black;
  font-size: 1.1em;
  text-align: center;
  padding-bottom: 0.5em;
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`
const SubTitle = styled.h2`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 1.8em;
  padding-top: 0.5em; 
  padding-bottom: 0.5em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 2em;
  }
`