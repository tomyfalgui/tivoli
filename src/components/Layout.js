import React from "react"
import { createGlobalStyle } from "styled-components"
import NavBar from "./NavBar"
import "../styles/minireset.css"

const GlobalStyles = createGlobalStyle`
  font-family: 'Lato', sans-serif;
`

export default ({ children }) => (
  <main>
    <GlobalStyles></GlobalStyles>
    <NavBar />
    {children}
  </main>
)
