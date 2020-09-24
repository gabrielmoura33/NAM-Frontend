import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    font-family: 'Roboto', serif;

    height: 100%;
    width: 100%;
  }

  h1 {
    font-family: 'Roboto', serif;
  }

  :root {
    --primary: #007EA7;
    --buttons: #999;
    --white: #FFF;
    --gray: #7A7A7A;
  }

  input, button, select {
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
