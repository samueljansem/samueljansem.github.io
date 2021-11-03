import { createGlobalStyle } from 'styled-components';
import AvertaBoldWoff from '../assets/fonts/AvertaStd-Bold.woff';
import AvertaBoldWoff2 from '../assets/fonts/AvertaStd-Bold.woff2';
import AvertaRegularWoff from '../assets/fonts/AvertaStd-Regular.woff';
import AvertaRegularWoff2 from '../assets/fonts/AvertaStd-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'averta-regular';
    src: local('averta-regular'), url(${AvertaRegularWoff}) format('woff'), url(${AvertaRegularWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'averta-bold';
    src: local('averta-bold'), url(${AvertaBoldWoff}) format('woff'), url(${AvertaBoldWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    background: var(--background);
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;

  }

  ::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
  }

  ::-webkit-scrollbar-corner {
      background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
      background-color: var(--orange);
      height: 100px;
  }

  :root {
    --white: #fff;
    --black: #000;
    --background: #fcfcfc;
    --text: #242625;
    --orange: #FF7518;
  }
`;
