import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv"
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Banner from "../../images/banner2.png"
import Committee from "../../images/committee.jpg"

class Home extends Component{

  render() {
    return(
        <CenterDiv>
          <ImageDiv>
            <Image src={Banner} alt="Image"/>
            <Photo src={Committee} alt="Committee"/>
          </ImageDiv>
          <Divider variant="middle" />
          <TextDiv>
            <SubTitle>Our Aim</SubTitle>
            <Paragraph>Women in Science, Engineering and Technology (WSET) is a society at Imperial College
              London that was founded in 2007 by three female PhD students. We have three aims that we try fulfil every year:
              <List>
                <li> We want to connect female undergraduate students within Imperial and help grow their network.</li>
                <li> We want to connect female undergraduate students to STEM profressionals through networking events and insight events.</li>
                <li> We want to encourage younger female students to pursue STEM degrees at University. </li>
              </List>
            </Paragraph>
            <Divider variant="middle" />
            <SubTitle>Want to become a member?</SubTitle>
            <Paragraph>
              Membership to WSET is free and can be purchased from the union website <a  href={"https://www.imperialcollegeunion.org/activities/a-to-z/women-set"} target="_blank">here</a>. Make sure you log in with your
              Imperial College credentials.
            </Paragraph>
            <Divider variant="middle" />
            <SubTitle>Have any questions?</SubTitle>
            <Paragraph>
              Feel free to email us at
              <a  href={"mailto:mailto:wset@ic.ac.uk"} target="_blank"> wset@ic.ac.uk</a> with any questions or  concerns you may have.
              <br /> Alternatively, feel free to message us on our <a href={"https://www.facebook.com/ic.wset"} target="_blank">facebook page</a>.
            </Paragraph>
            <Divider variant="middle" />
            <SubTitle>Interested in being on the mailing list?</SubTitle>
            <Paragraph>
              Make sure you are signed up to the <a href={"https://mailman.ic.ac.uk/mailman/listinfo/icu-women-in-set"} target="_blank">ICU-Women-In-SET</a> mailing list.
              <br /> Alternatively, feel free to email us and we can make sure that you are subscribed.
            </Paragraph>
          </TextDiv>
        </CenterDiv>
    )
  }
}

export default Home;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const Paragraph = styled.p`
  padding: 0.5em; 
  margin: 0;
  color: black;
  font-size: 1.1em;
  text-align: center;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`
const List = styled.ul`
  text-align: center;
  margin: auto;
  list-style-position: inside;
`

const SubTitle = styled.h2`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 1.8em;
  padding-top: 0.5em; 
  margin: 0;
  @media(min-width: 768px){
    font-size: 2em;
  }
`
const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
`;

const Image = styled.img`
  height: auto;
  width: 95%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  padding-bottom: 0.5em;
`;

const Photo = styled.img`
  height: auto;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  padding-bottom: 0.5em;
`;