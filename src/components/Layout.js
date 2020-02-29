import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Navbar from "./Navbar"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import SubFooter from "./SubFooter"
import "normalize.css"
import "../utils/global.css"

const theme = {
  primary: "#2f8bcb",
  orange: "#e88d17",
  white: "#F4F7F9",
  "light-blue": "#95b8e1",
  font: {
    display: "Titillium Web, sans-serif",
  },
}

const GlobalStyles = createGlobalStyle`
html, body {
  font-size: 100%;
  font-family: 'Lato', sans-serif;
}
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>Tivoli Solutions</title>
    </Helmet>
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
