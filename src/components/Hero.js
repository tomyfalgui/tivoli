import React from "react"
import styled from "styled-components"

import { CtaLinkExternal, CtaLinkInternal } from "../shared/styles/CTA"
import Curve from "../assets/curve.svg"

const HeroStyles = styled.section`
  display: flex;
  position: relative;
  background-image: linear-gradient(
    270deg,
    #253670 0%,
    #2c639b 0.01%,
    #2f8bcb 100%
  );
  min-height: 90vh;

  svg {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .button-container {
    margin-top: 40px;
  }
`

const DescriptionHeader = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 156.69%;
  letter-spacing: 0.03em;
  font-family: "Titillium Web";

  color: #f4f7f9;
  span {
    color: #e88d17;
  }
`

const DescriptionText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 164.69%;
  color: #cae7fb;
  max-width: 450px;
  margin-top: 16px;
`

function Hero() {
  return (
    <HeroStyles>
      <div className="description">
        <DescriptionHeader>
          Enabling your{" "}
          <span>
            AI-Infused <br />
            Digital Transformation
          </span>
        </DescriptionHeader>
        <DescriptionText>
          We are a digital enabling solution provider that develops, integrates,
          implements and supports innovative ideas to allow companies achieve
          their own best digital transformation.
        </DescriptionText>
        <div className="button-container">
          <CtaLinkExternal to="/solutions/" inverted="yes" right="16">
            Our Solutions
          </CtaLinkExternal>
          <CtaLinkInternal href="#contact-us">Contact Us</CtaLinkInternal>
        </div>
      </div>
      <div className="illustrations"></div>
      <Curve />
    </HeroStyles>
  )
}

export default Hero
