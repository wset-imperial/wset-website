import BP from "../../images/Sponsors/BP.jpg";
import DB from "../../images/Sponsors/DeutscheBank.jpg";
import Google from "../../images/Sponsors/Google.jpg";
import FS from "../../images/Sponsors/FactSet.png";
import GR from "../../images/Sponsors/GResearch.png";
import JS from "../../images/Sponsors/JaneStreet.png";
import Visa from "../../images/Sponsors/visa.png";
/*
  * Uses an array of objects containing information about each sponsor.
  * Import the photo at the top as show.
  * Copy and paste any and change the fields as necessary, make sure the photo is imported at teh top!
  * Ideally place sponsors in order of platinum/gold/silver/bronze as sponsors will render from top to bottom.
*/

const GoldSponsors = [
  {
    name: "BP",
    info: "'Our purpose is reimagining energy for people and our planet. We want to help the world reach net zero and improve people’s lives. We will aim to dramatically reduce carbon in our operations and in our production, and grow new low carbon businesses, products and services. We will advocate for fundamental and rapid progress towards Paris and strive to be a leader in transparency.'",
    image: BP,
    website: "https://www.bp.com/"
  },
  {
    name: "Deutsche Bank",
    info: "'Deutsche Bank is the leading German bank with strong European roots and a global network. The bank focuses on its strengths in a Corporate Bank newly created in 2019, a leading Private Bank, a focused investment bank and in asset management.'",
    image: DB,
    website: "https://www.db.com/"
  },
  {
    name: "FactSet",
    info: "'FactSet creates flexible, open data and software solutions for tens of thousands of investment professionals around the world, providing instant anytime, anywhere access to financial data and analytics that investors use to make crucial decisions. For 40 years, through market changes and technological progress, our focus has always been to provide exceptional client service.'",
    image: FS,
    website: "https://www.factset.com/"
  },
  {
    name: "Google",
    info: "'Our mission is to organise the world’s information and make it universally accessible and useful. Google specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.'",
    // DESCRIPTION NEEDED because Google does not include a 'why us' or 'who are we' section.
    image: Google,
    website: "https://www.google.com/"
  },
  {
    name: "G Research",
    info: "'G-Research is Europe’s leading quantitative finance research firm. We hire the brightest minds in the world to tackle some of the biggest questions in finance. We pair this expertise with machine learning, big data, and some of the most advanced technology available to predict movements in financial markets.'",
    image: GR,
    website: "https://www.gresearch.co.uk/about/"
  },
  {
    name: "Jane Street",
    info: "'Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem solving. With offices in New York, London, Hong Kong, and Amsterdam, Jane Street is a trading firm that operates around the clock and around the globe, trading a wide range of financial products, including: ETFs, Equities, Futures, Commodities, Options, Bonds, and Currencies. On an average day, we trade over $21 billion in equities, bonds, and ETFs worldwide. We are also very active in the markets for options, futures, currencies, commodities, and fixed income.'",
    image: JS,
    website: "https://www.janestreet.com/"
  },
  {
    name: "Visa",
    info: "'We are a global payments technology company working to enable consumers, businesses, banks and governments to use digital currency.We create the ground-breaking technologies and bold solutions that make digital commerce safe and seamless, connecting us all every single day. Our processing network is capable of handling more than 65,000 transaction messages a second and we have a huge responsibility to keep our infrastructure secure and resilient for clients and consumers.'",
    image: Visa,
    website: "https://www.visa.co.uk/"
  }
]

export default GoldSponsors;
