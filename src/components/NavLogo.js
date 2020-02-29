import React from "react"
import styled from "styled-components"

import Logo from "../assets/logo.svg"
import WordMarkTiny from "../assets/wordmark.svg"

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 16px;
  }
`
const WordMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: "Titillium Web", sans-serif;
    color: white;
    font-size: 18.5px;
    margin: 0;
  }
`

export default function NavLogo({ open }) {
  return (
    <LogoContainer open={open}>
      <Logo />
      <WordMark>
        <h1>TIVOLI</h1>
        <WordMarkTiny />
      </WordMark>
    </LogoContainer>
  )
}
