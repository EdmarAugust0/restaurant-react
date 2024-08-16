import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  lightBeige: '#FFF8F2',
  beige: '#FFEBD9',
  orange: '#E66767',
  black: '#000',
  red: '#FF0000'
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

  .margin-top {
    margin-top: 16px;
  }

`
