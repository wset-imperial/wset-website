import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv";
import styled from "styled-components";
import Upcoming from "./UpcomingEventList";
import UpcomingEvent from "./UpcomingEvent";
import Divider from "@material-ui/core/Divider";
import Past from "./PastEvents";
import PastEvent from "./PastEvent";

class Events extends Component{

  render() {
    const emptyUpcoming =  Upcoming.length === 0;

    return(
      <CenterDiv>
        <TitleDiv>
          <Title>Upcoming Events!</Title>
        </TitleDiv>
        <TextDiv>
          {emptyUpcoming &&
          <Paragraph> There are no upcoming events at the moment but keep an eye out on our <a href={"https://www.facebook.com/ic.wset"}>Facebook Page</a> for
            any new events! Alternatively, if you have any ideas of events you would like us to host, please email us at <a href={"mailto:wset@ic.ac.uk"}>wset@ic.ac.uk</a>!
          </Paragraph>
          }
          {!emptyUpcoming &&
            Upcoming.map((data, index) =>
              <UpcomingEvent name={data.name} info={data.info} fblink={data.fblink} date={data.date} location={data.location} key={index} />
            )
          }
        </TextDiv>
        <Divider variant={"middle"}/>
        <TitleDiv>
          <Title>Previous Events!</Title>
        </TitleDiv>
        <TextDiv>
          <Paragraph> These are some events that we have held. If you have any ideas of events you would like us to host, please email us at <a href={"mailto:wset@ic.ac.uk"}>wset@ic.ac.uk</a>!</Paragraph>
        </TextDiv>
        <TextDiv>
          {
            Past.map((data, index) =>
              <div>
                <Divider variant={"middle"}/>
                <PastEvent name={data.name} info={data.info} fblink={data.fblink} date={data.date} location={data.location} key={index} />
              </div>
            )
          }
        </TextDiv>
      </CenterDiv>
    )
  }
}

export default Events;

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