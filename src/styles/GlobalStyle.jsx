import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins';
  }

  #root {
    display: flex;
    flex-direction: column;
  }

`;

export default GlobalStyle;
