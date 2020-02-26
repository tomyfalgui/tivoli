import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import Logo from "../assets/logo.svg"
import WordMarkTiny from "../assets/wordmark.svg"

const LogoContainer = styled.div`
  ${tw`flex items-center`};
  > svg {
    ${tw`mr-md`};
  }
`
const WordMark = styled.div`
  ${tw`flex flex-col items-start`}

  h1 {
    ${tw`font-display m-0 text-white`};
    font-size: 18.5px;
  }
`

export default function NavLogo(props) {
  return (
    <LogoContainer>
      <Logo />
      <WordMark>
        <h1>TIVOLI</h1>
        <WordMarkTiny />
      </WordMark>
    </LogoContainer>
  )
}
