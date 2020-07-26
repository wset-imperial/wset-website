import styled from "styled-components";

/* White box inside each page for content. */
const CenterDiv = styled.div`
    position: relative;
    margin-top: 3em;
    margin-bottom: 5rem;
    padding-top: 1.5rem;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    background-color: #fff;
    border-radius: 1%;
    min-height: 30rem; 
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    
    @media(max-width: 750px){
      width: 100%;
      padding-botton: 0rem;
      margin-bottom:0rem;
      border-radius: 0%;
    }
`
export default CenterDiv;

