import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Navbar from "./Navbar"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import SubFooter from "./SubFooter"
import "../utils/global.css"

const theme = {
  primary: "#2f8bcb",
  orange: "#e88d17",
  white: "#F4F7F9",
  "light-blue": "#95b8e1",
}

const GlobalStyles = createGlobalStyle`
  font-family: 'Lato', sans-serif;
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyles />
      <Navbar />
      {children}
      <ContactUs />
      <Footer />
      <SubFooter />
    </main>
  </ThemeProvider>
)
