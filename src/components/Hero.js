import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import { PrimaryCTA, GhostCTA } from "./Buttons"
import Curve from "../assets/curve.svg"
import Person1 from "../assets/heroperson1.svg"
import Person2 from "../assets/heroperson2.svg"

const HeroSection = styled.section`
  background-image: linear-gradient(
    270deg,
    #253670 0%,
    #2c639b 0.01%,
    #2f8bcb 100%
  );
  ${tw`p-10 font-semibold text-lg flex flex-col relative pb-40`};

  > svg {
    ${tw`absolute bottom-0 w-full left-0 right-0`};
  }
`

const Tagline = styled.h2`
  ${tw`text-white font-display tracking-wide mb-3 text-xl`};

  > span {
    ${tw`text-orange-accent`};
  }
`

const LogoContainer = styled.div`
  ${tw`flex flex-col relative mb-10`};

  > svg {
    width: 65%;
  }
  > svg:nth-child(2) {
    ${tw`absolute`};

    left: 90px;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <LogoContainer>
        <Person1 />
        <Person2 />
      </LogoContainer>
      <Tagline>
        Enabling your{" "}
        <span>
          AI-Infused <br /> Digital Transformation
        </span>
      </Tagline>
      <p className="text-light-blue font-normal text-xs leading-relaxed mb-8">
        We are a digital enabling solution provider that develops, integrates,
        implements and supports innovative ideas to allow companies achieve
        their own best digital transformation.
      </p>
      <PrimaryCTA to="/solutions">Our Solutions</PrimaryCTA>
      <GhostCTA to="/contact-us">Contact Us</GhostCTA>
      <Curve />
    </HeroSection>
  )
}

export default Hero
