import React from "react"
import { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import "../utils/global.css"

const GlobalStyles = createGlobalStyle`
  font-family: 'Lato', sans-serif;
`

export default ({ children }) => (
  <main>
    <GlobalStyles />
    <Navbar />
    {children}
  </main>
)
