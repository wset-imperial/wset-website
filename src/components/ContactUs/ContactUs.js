import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

class ContactUs extends Component{
  render() {
    return(
      <CenterDiv>
        <TitleDiv>
          <Title>Want to become a member?</Title>
        </TitleDiv>
        <TextDiv>
          <Paragraph>
            Membership to WSET is free and can be purchased from the union website <a  href={"https://www.imperialcollegeunion.org/activities/a-to-z/women-set"} target="_blank">here</a>. Make sure you log in with your
            Imperial College credentials.
          </Paragraph>
        </TextDiv>
        <Divider variant="middle" />
        <TitleDiv>
          <Title>Have any questions?</Title>
        </TitleDiv>
        <TextDiv>
          <Paragraph>
            Feel free to email us at
            <a  href={"mailto:mailto:wset@ic.ac.uk"} target="_blank"> wset@ic.ac.uk</a> with any questions or  concerns you may have.
            <br /> Alternatively, feel free to message us on our <a href={"https://www.facebook.com/ic.wset"} target="_blank">facebook page</a>.
          </Paragraph>
        </TextDiv>
        <Divider variant="middle" />
        <TitleDiv>
          <Title>Interested in being on the mailing list?</Title>
        </TitleDiv>
        <TextDiv>
          <Paragraph>
            Make sure you are signed up to the <a href={"https://mailman.ic.ac.uk/mailman/listinfo/icu-women-in-set"} target="_blank">ICU-Women-In-SET</a> mailing list.
            <br /> Alternatively, feel free to email us and we can make sure that you are subscribed.
          </Paragraph>
        </TextDiv>
      </CenterDiv>
    )
  }
}

export default ContactUs;

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
  line-height:10px;
`;

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
  color: black;
  font-size: 1.1em;
  text-align: center;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`