import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        background-color: #121212; 
        overflow: hidden visible;
        position: relative;
        padding: 10px;
    }

    ::-webkit-scrollbar{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }

    ::-webkit-scrollbar-thumb {
       background-color: rgba(175, 54, 220, 0.5);
       border-radius: 10px;
    }
`
export { GlobalStyles }