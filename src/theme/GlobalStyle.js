import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;500&display=swap');

*, *::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


} 
html {
    font-size: 62,5%;
}
 body
 {
    /* padding-left:150px; */
    font-size:1.6rem;
    font-family: "Dosis", sans-serif;
 }
`;

export default GlobalStyle;
