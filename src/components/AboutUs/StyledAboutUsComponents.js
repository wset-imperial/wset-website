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

const TextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-bottom: 2em;
`
const Title = styled.h1`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 2.8em;
  width: 90%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0;
  @media(min-width: 768px){
    font-size: 3.3em;
  }
`
const SubTitle = styled.h2`
  color:#6a1026;
  font-weight: bold;
  text-align: center;
  font-size: 1.8em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 2em;
  }
`
export {
  Paragraph,
  TextDiv,
  Title,
  SubTitle
}