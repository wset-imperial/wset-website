import QB from "../../images/Sponsors/QB.png";
import Stroud from "../../images/Sponsors/Stroud Logo and Name - Blue.png";
import Visa from "../../images/Sponsors/visa.png";

/*
  * Uses an array of objects containing information about each sponsor.
  * Import the photo at the top as show.
  * Copy and paste any and change the fields as necessary, make sure the photo is imported at teh top!
  * Ideally place sponsors in order of platinum/gold/silver/bronze as sponsors will render from top to bottom.
*/

const SilverSponsors = [
  {
    name: "Quantum Black",
    info: "'We harness data, analytics and design to give organisations a clear path to improve performance. When we combine our skills and approach with McKinsey & Company’s knowledge and expertise, we equip clients with an incomparable level of competitiveness.'",
    image: QB,
    website: "https://www.quantumblack.com/",
  },
  {
    name: "Stroud",
    info: "'We work in a wide range of businesses in both the public and private sectors. When Stroud was founded, our core work was in the manufacturing and chemical sectors including paper and packaging, food and beverage, pharmaceuticals, fibers, coatings, and oil. We maintain a strong and growing client base in these sectors and in recent years have expanded our scope to include defense services, infrastructure, and healthcare. Our approach has broad application and we continue to develop our offering into new and exciting areas of business.'",
    image: Stroud,
    website: "https://www.stroudinternational.com/"
  },
  {
    name: "Visa",
    info: "'We are a global payments technology company working to enable consumers, businesses, banks and governments to use digital currency.We create the ground-breaking technologies and bold solutions that make digital commerce safe and seamless, connecting us all every single day. Our processing network is capable of handling more than 65,000 transaction messages a second and we have a huge responsibility to keep our infrastructure secure and resilient for clients and consumers.'",
    image: Visa,
    website: "https://www.visa.co.uk/"
  }
]

export default SilverSponsors;