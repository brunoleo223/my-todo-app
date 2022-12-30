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
        color: ${({ theme }) => theme.text};
        width: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.body};
    }

    .themeToggler{
        width: 30px;
        height: 30px;
        background: transparent;
        border: 0;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;

        svg{
            fill: ${({ theme }) => theme.inputText};
            stroke: ${({ theme }) => theme.inputText};
        }
    }
`;