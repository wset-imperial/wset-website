import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv"
import styled from "styled-components";
import HomepageItem from "./HomePageItem";
import Content from "./HomePageContent";

class Home extends Component{

  render() {
    return(
        <CenterDiv>
          <TitleDiv>
            <Title> Imperial College Women In Science, Engineering and Technology Society </Title>
          </TitleDiv>
          <TextDiv>
            <Paragraph>Women in Science, Engineering and Technology (WSET) is a society at Imperial College
              London that was founded in 2007 by three female PhD students. We have three aims that we try fulfil every year:
              <List>
                <li> We want to connect female undergraduate students within Imperial and help grow their network.</li>
                <li> We want to connect female undergraduate students to STEM profressionals through networking events and insight events.</li>
                <li> We want to encourage younger female students to pursue STEM degrees at University. </li>
              </List>
            </Paragraph>
            {Content.map((data, index) =>
              <HomepageItem title={data.title} info={data.info} image={data.image} date={data.date} key={index} />
            )}
          </TextDiv>
        </CenterDiv>
    )
  }
}

export default Home;

const Title = styled.h1`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0em;
  @media(min-width: 768px){
    font-size: 2.5em;
  }
`

const TitleDiv = styled.div`
  width: 90%;
  height: auto;
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const Paragraph = styled.p`
  color: black;
  font-size: 1.1em;
  text-align: center;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`
const List = styled.ol`
  text-align: left;
`
