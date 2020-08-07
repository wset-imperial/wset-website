import React from "react";
import CenterDiv from "../../styles/CenterDiv";
import Bronze from "./BronzeSponsors.jsx";
import Silver from "./SilverSponsors.jsx";
import Gold from "./GoldSponsors.jsx";
import Platinum from "./PlatinumSponsor.jsx";
import Sponsor from "./Sponsor";
import {Title, Paragraph, SponsorTitle} from "./StyledSponsorComponents";
import Fade from "react-reveal/Fade";
import {Icon} from 'semantic-ui-react';


const sponsorsPage = () => {
  const havePlatinum = Platinum.length !== 0;
  const haveGold = Gold.length !== 0;
  const haveSilver = Silver.length !== 0;
  const haveBronze = Bronze.length !== 0;
  return (
    <CenterDiv>
      <Fade right cascade>
        <Title>
          Sponsors
        </Title>
        <Paragraph>
          Women In Set offers a lot to our members and none of this would be possible without the help of our sponsors.
          If you would like to hold events with us or are interested in creating a partnership then please reach out to
          see what we can offer you.
        </Paragraph>
        <div>
          {/*Platinum Sponsors*/}
          {
            havePlatinum &&
            <SponsorTitle>
              <Icon disabled name='star' style={{color: "#a0b2c6"}}/>
              Platinum Sponsors</SponsorTitle>
          }
          {
            havePlatinum && Platinum.map((data, index) =>
              <Sponsor name={data.name} info={data.info} image={data.image} website={data.website}
                       key={index}/>)
          }
          {/*Gold Sponsors*/}
          {
            haveGold &&
            <SponsorTitle>
              <Icon disabled name='star' style={{color: "#d4af37"}}/>
              Gold Sponsors</SponsorTitle>
          }
          {
            haveGold && Gold.map((data, index) =>
              <Sponsor name={data.name} info={data.info} image={data.image} website={data.website}
                       key={index}/>)
          }
          {/*Silver Sponsors*/}
          {
            haveSilver &&
            <SponsorTitle>
              <Icon disabled name='star' style={{color: "#C0C0C0"}}/>
              Silver Sponsors</SponsorTitle>
          }
          {
            haveSilver && Silver.map((data, index) =>
              <Sponsor name={data.name} info={data.info} image={data.image} website={data.website}
                       key={index}/>)
          }
          {/*Bronze Sponsors*/}
          {
            haveBronze &&
            <SponsorTitle>
              <Icon disabled name='star' style={{color: "#CD7F32"}}/>
              Bronze Sponsors</SponsorTitle>
          }
          {
            haveBronze && Bronze.map((data, index) =>
              <Sponsor name={data.name} info={data.info} image={data.image} website={data.website}
                       key={index}/>)
          }
        </div>
      </Fade>
    </CenterDiv>
  )
}

export default sponsorsPage;
