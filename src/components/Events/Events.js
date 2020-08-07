import React, {Component} from "react";
import CenterDiv from "../../styles/CenterDiv";
import styled from "styled-components";
import Upcoming from "./UpcomingEventList";
import UpcomingEvent from "./UpcomingEvent";
import Divider from "@material-ui/core/Divider";
import Past from "./PastEventList";
import PastEvent from "./PastEvent";
import Fade from "react-reveal/Fade";

class Events extends Component {

  render() {
    const emptyUpcoming = Upcoming.length === 0;

    return (
      <CenterDiv>
        <Fade right fade>
          <TitleDiv>
            <Title>Upcoming Events!</Title>
          </TitleDiv>
        </Fade>
        <TextDiv>
          {emptyUpcoming &&
          <Fade right cascade>
            <Paragraph> There are no upcoming events at the moment but keep an eye out on our <a
              href={"https://www.facebook.com/ic.wset"}>Facebook Page</a> for
              any new events! Alternatively, if you have any ideas of events you would like us to host, please email us
              at <a href={"mailto:wset@ic.ac.uk"}>wset@ic.ac.uk</a>!
            </Paragraph>
          </Fade>
          }
          {!emptyUpcoming &&
          Upcoming.map((data, index) =>
            <Fade right cascade>
              <UpcomingEvent name={data.name} info={data.info} fblink={data.fblink} date={data.date}
                             location={data.location} key={index}/>
            </Fade>
          )
          }
          <Fade right cascade>
            <Divider variant={"middle"}/>
            <Title>Previous Events!</Title>
            <Paragraph> These are some events that we have held. If you have any ideas of events you would like us to
              host, please email us at <a href={"mailto:wset@ic.ac.uk"}>wset@ic.ac.uk</a>!</Paragraph></Fade>
          {
            Past.map((data, index) =>
              <Fade right cascade>
                <Divider variant={"middle"}/>
                <PastEvent name={data.name} info={data.info} fblink={data.fblink} date={data.date}
                           location={data.location} key={index}/>
              </Fade>
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
  padding-top: 1em;
  padding-bottom: 0.1em;
  margin-top: -0.5em;
  margin-bottom: 0;
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
  margin-top:0;
  margin-bottom:0;
  padding: 0;
`;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`
const Paragraph = styled.p`
  color: black;
  font-size: 1.1em;
  text-align: center;
  
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`