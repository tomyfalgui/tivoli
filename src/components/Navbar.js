import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import NavLogo from "./NavLogo"

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${p => p.theme.primary};
`

const Fab = styled.svg`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 50;
`

const Navbar = function() {
  return (
    <Container>
      <NavLogo />
      <Fab
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="41" cy="41" r="27" fill="#2F8BCB" />
          <circle cx="41" cy="41" r="26.5" stroke="#CAE7FB" />
        </g>
        <line
          x1="31.5"
          y1="36.5"
          x2="50.5"
          y2="36.5"
          stroke="#CAE7FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="31.5"
          y1="48.5"
          x2="50.5"
          y2="48.5"
          stroke="#CAE7FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="31.5"
          y1="42.5"
          x2="50.5"
          y2="42.5"
          stroke="#CAE7FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="86"
            height="86"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </Fab>
    </Container>
  )
}

export default Navbar
