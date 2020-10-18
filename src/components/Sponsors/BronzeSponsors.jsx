import ARM from "../../images/Sponsors/Arm_logo_blue_150LG.png";
import BCG from "../../images/Sponsors/BCG_MONOGRAM.png";
import Amazon from "../../images/Sponsors/amazonlogo.png";

/*
  * Uses an array of objects containing information about each sponsor.
  * Import the photo at the top as show.
  * Copy and paste any and change the fields as necessary, make sure the photo is imported at teh top!
  * Ideally place sponsors in order of platinum/gold/silver/bronze as sponsors will render from top to bottom.
*/

const BronzeSponsors = [
  {
    name: "Arm",
    info: "'Arm defines the pervasive computing shaping today's connected world. Realized in 100 billion silicon chips, their device architectures orchestrate the performance of technology from smartphones to supercomputers, from medical instruments to agricultural sensors, and from base stations to servers.'",
    image: ARM,
    website: "https://www.arm.com/company/careers"
  },
  {
    name: "BCG",
    info: "'Boston Consulting Group (BCG) partners with leaders in business and society to tackle their most important challenges and capture their greatest opportunities...BCG's diverse global teams bring deep industry and function expertise and a range of perspectives to spark change through leading-edge management consulting as well as data science, technology and design,digital ventures, and business purpose.'",
    image: BCG,
    website: "https://www.bcg.com/en-gb/",
  },
  {
    name: "Amazon",
    info: "'Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strive to have a positive impact on customers, employees, small businesses, the economy, and communities. Amazonians are smart, passionate builders with different backgrounds and goals, who share a common desire to always be learning and inventing on behalf of our customers. '",
    image: Amazon,
    website: "https://www.aboutamazon.com/"
  }
]

export default BronzeSponsors;
