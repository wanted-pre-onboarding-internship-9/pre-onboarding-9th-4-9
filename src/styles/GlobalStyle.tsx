import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  body, div, span, h1, h2, h3, h4, h5, h6,
  p, i, ol, ul, li, form, label, header, nav,
  input, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
  }

a {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
}

ul, ol, li {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

button:focus,
button:active,
textarea:focus,
textarea:active,
input:focus,
input:active {
  box-shadow: none;
  outline: none;
}

textarea {
  resize: none;
}
`;

export default GlobalStyles;
