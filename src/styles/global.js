import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 12px;
        overflow-x: hidden;
        scroll-behavior: smooth;
        
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: white;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
        background-attachment: fixed;

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    

`;
