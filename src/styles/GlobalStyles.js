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

  html {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }

  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-background: #fcfcfc;
    --color-text: #242625;
    --color-orange: #FF7518;
  }
`;
