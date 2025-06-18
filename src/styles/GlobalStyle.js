import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* RESET */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.6;
    background-color: #f9fafc;
    color: #1a1a1a;
    font-family: 'Poppins', system-ui, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button,
  input,
  textarea,
  select {
    border: none;
    color: inherit;
    font: inherit;
    background: transparent;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root, html, body {
    height: 100%;
  }
`;

export default GlobalStyle;