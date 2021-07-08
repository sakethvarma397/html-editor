import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
  }
.toolstrip {
    background-color: ${({ theme }) => theme.toolstrip};
}

.toolstrip button {
    background-color: ${({ theme }) => theme.toolstrip_button};
    color:${({ theme }) => theme.text};
}

`;
