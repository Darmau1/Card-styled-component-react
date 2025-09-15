import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.primary};
    font-family: sans-serif, sans, Inter;
}
`