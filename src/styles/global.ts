import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    }

  body {
    background: ${props => props.theme.colors.backgorund};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none
  }

  button {
    cursor: pointer;
  }

`;
