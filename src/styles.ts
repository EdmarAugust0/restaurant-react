import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  branco: '#fff',
  begeClaro: '#FFF8F2',
  bege: '#FFEBD9',
  orange: '#E66767',
  black: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    color: ${colors.orange};
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

`
