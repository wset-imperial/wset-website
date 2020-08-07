import React from "react";
import CenterDiv from "../../styles/CenterDiv";
import Sponsors from "./SponsorsData";
import Sponsor from "./Sponsor";
import {Title, Paragraph} from "./StyledSponsorComponents";
import Fade from "react-reveal/Fade";
import MetaTags from "react-meta-tags";

const sponsorsPage = () => {
  return (
    <CenterDiv>
      <MetaTags>
        <title>WSET Sponsors</title>
        <meta name="description" content="Sponsors of WSET Imperial" />
        <meta property="og:title" content="WSET Sponsors" />
        <meta property="og:image" content="../../images/wlogo.gif" />
      </MetaTags>
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
          {Sponsors.map((data, index) =>
            <Sponsor name={data.name} info={data.info} image={data.image} level={data.level} website={data.website}
                     key={index}/>
          )}
        </div>
      </Fade>
    </CenterDiv>
  )
}

export default sponsorsPage;
