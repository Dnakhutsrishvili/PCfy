import { createGlobalStyle } from "styled-components";
//Global styles
const GlobalStyle = createGlobalStyle`
  body {
    width:1920px;
    height:1080px;
    margin: 0;
    padding: 0;
    font-family: HelveticaNeue,Open-Sans, Helvetica, Sans-Serif;
  }
  @media only screen and (max-width: 900px) {
    body {
      width: 390px;
      height: 844px;
      margin: 0;
      padding: 0;
      font-family: HelveticaNeue,Open-Sans, Helvetica, Sans-Serif;
    }
    #root{
      display:flex;
      width: 390px;
      height: 844px;
      margin: 0;
      padding: 0;
    }
  }
`;

export default GlobalStyle;
