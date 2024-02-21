import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    a {
        color: inherit;
    }

    a:active{
        color: inherit;
    }
`

export { GlobalReset }