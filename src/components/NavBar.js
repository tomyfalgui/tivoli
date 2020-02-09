import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import { CtaLinkInternal } from "../shared/styles/CTA"
import Logo from "../assets/logo.svg"

const NavBarStyles = styled.nav`
  display: flex;
  align-items: center;
  background-color: #2f8bcb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 16px 55px 16px 64px;
`

const LogoMark = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-left: 14px;
  margin-right: auto;
`

const LinkStyles = styled(Link)`
  color: #cae7fb;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-size: 12.8px;
  font-weight: bold;
  margin-right: 36px;
`

const NavBar = function() {
  return (
    <NavBarStyles>
      <Logo />
      <LogoMark>TIVOLI</LogoMark>
      <LinkStyles activeClassName="active-link" to="/">
        Home
      </LinkStyles>
      <LinkStyles to="/about/">About Tivoli</LinkStyles>
      <LinkStyles to="/solutions/">Our Solutions</LinkStyles>
      <LinkStyles to="/community/">Community</LinkStyles>
      <CtaLinkInternal href="#contact-us">Contact Us</CtaLinkInternal>
    </NavBarStyles>
  )
}

export default NavBar
