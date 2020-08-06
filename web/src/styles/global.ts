import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import OratorStd from '../assets/fonts/OratorStd.otf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roboto-Regular;
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: Roboto-Bold;
    font-style: normal;
    font-weight: 700;
    src: url(${RobotoBold});
  }

  @font-face {
    font-family: OratorStd;
    font-style: normal;
    font-weight: 400;
    src: url(${OratorStd});
  }

  #root {
    font-size: 60.0%;
    background: #e0dfda;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
  }

  body,
  input,
  button,
  textarea,
  span,
  p {
    font: 400 1.4rem Roboto-Regular;
  }

  button {
    cursor: pointer;
  }

  @media(min-width: 700px){
    :root {
        font-size: 62.5%;
    }
  }

`;
