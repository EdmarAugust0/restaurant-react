import { createGlobalStyle } from 'styled-components'

export const colors = {
  branco: '#fff',
  begeClaro: '#FFF8F2',
  bege: '#FFEBD9',
  orange: '#E66767',
  darkOrange: '#b86e14'
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
  }

`
