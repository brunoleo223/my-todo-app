import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, html, #root{
        height: 100%;
    }

    body{
        font: 16px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #333;
    }
`;