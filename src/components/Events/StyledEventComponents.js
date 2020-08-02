import styled from "styled-components";

const Title = styled.h3`
  color:#6a1026;
  font-weight: bold;
  text-align: left;
  font-size: 1.5em;
  padding-top: 0.5em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 1.8em;
  }
`

const Info = styled.p`
  color: black;
  font-size: 1.2em;
  text-align: left;
  padding-top: 0.3em;
  padding-bottom: 1em;
  margin: 0;
  @media(min-width: 768px){
    font-size: 1.3em;
  }
`

const Date = styled.p`
  color: black;
  font-style: italic;
  font-size: 1.1em;
  text-align: left;
  opacity: 0.85;
  padding-bottom: 0.5em;
  margin: 0;
`

export {
  Title,
  Info,
  Date
}