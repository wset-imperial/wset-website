import React from "react";
import CenterDiv from "../../styles/CenterDiv";
import styled from "styled-components";
import Sponsors from "./SponsorsData";
import Sponsor from "./Sponsor";


const sponsorsPage = () => {
  return(
    <CenterDiv>
      <Title>
        Sponsorship
      </Title>
      <Paragraph>
        Women In Set offers a lot to our members and none of this would be possible without the help of our sponsors.
        If you would like to hold events with us or are interested in creating a partnership then please reach out to see what we can offer you.
      </Paragraph>
      <div>
        {Sponsors.map((data, index) =>
          <Sponsor name={data.name} info={data.info} image={data.image} level={data.level} website={data.website} key={index} />
        )}
      </div>
    </CenterDiv>
  )
}

export default sponsorsPage;

const Title = styled.h1`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 2.5em;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0em;
  @media(min-width: 768px){
    font-size: 4em;
  }
`

const Paragraph = styled.p`
  font-size: 1.1em;
  text-align: center;
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0em;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`
