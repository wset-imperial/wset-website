import ARM from "../../images/Sponsors/Arm_logo_blue_150LG.png";
import BCG from "../../images/Sponsors/BCG_MONOGRAM.png";
import GS from "../../images/Sponsors/GoldmanSachs.png";
import SLB from "../../images/Sponsors/schlumberger_logo.png";
import SW from "../../images/Sponsors/softwire-logo-blue.png";
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
    name: "Goldman Sachs",
    info: "'Goldman Sachs brings people, capital and ideas together to help our clients and the communities we serve. We provide a wide range of financial services to a substantial and diversified client base that includes corporations, financial institutions, governments and individuals.'",
    image: GS,
    website: "https://www.goldmansachs.com/index.html"
  },
  {
    name: "Schulumberger",
    info: "'Schlumberger is the world's leading provider of technology for reservoir characterization, drilling, production, and processing to the oil and gas industry. Working in more than 85 countries and employing approximately 100,000 people who represent over 140 nationalities, Schlumberger supplies the industry's most comprehensive range of products and services, from exploration through production and integrated pore-to-pipeline solutions for hydrocarbon recovery that optimize reservoir performance.'",
    image: SLB,
    website: "https://www.slb.com/"
  },
  {
    name: "Softwire",
    info: "'We are innovators and passionate problem solvers both in software engineering and digital design.We hire the brightest people, give them great autonomy, remunerate them well, and provide lots of opportunities for them to give back to their local and not so local communities. We are growing quickly but choose to do so organically without taking on any debt. That all adds up to the best working environment around.'",
    image: SW,
    website: "https://www.union.ic.ac.uk/scc/women_in_set/sponsors.html"
  },
  {
    name: "Amazon",
    info: "'Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strive to have a positive impact on customers, employees, small businesses, the economy, and communities. Amazonians are smart, passionate builders with different backgrounds and goals, who share a common desire to always be learning and inventing on behalf of our customers. '",
    image: Amazon,
    website: "https://www.aboutamazon.com/"
  }
]

export default BronzeSponsors;