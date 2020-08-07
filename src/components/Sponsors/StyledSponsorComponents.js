import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1.1em;
  text-align: center;
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5em;
  padding-bottom: 1em;
  @media(min-width: 768px){
    font-size: 1.25em;
  }
`
const Image = styled.img`
  max-width: 40vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5em;
  position: relative;
  @media(min-width: 768px){
    max-width: 25vw;
    max-height: 15vh;
  }

`;

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
const Title = styled.h1`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 3em;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5em;
  margin-bottom: 0;
  @media(min-width: 768px){
    font-size: 3.5em;
  }
`
const SponsorTitle = styled.h1`
  color:#6a1026;
  font-weight: bold;
  text-align: left;
  font-size: 2em;
  width: 90%;
  position: relative;
  margin-left: 12%;
  margin-right: auto;
  padding-top: 0.5em;
  margin-bottom: 0.3em;
  @media(min-width: 768px){
    font-size: 2.5em;
  }
`

export {
  Paragraph,
  Image,
  TextDiv,
  Title,
  SponsorTitle
}