import React from "react"
import styled from "styled-components"
import Laptop from "../../assets/laptop.svg"

const SolutionsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  padding-bottom: 96px;
  background-color: ${p => p.theme.white};
  > svg {
    width: 100%;
    max-width: 400px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    > svg {
      margin-right: 48px;
    }
  }

  @media screen and (min-width: 1000px) {
    padding-bottom: 148px;
    > svg {
      margin-right: 72px;
    }
  }
`

const Tag = styled.h2`
  color: ${p => p.theme.primary};
  font-weight: 600;
  line-height: 1.56;
  margin-top: 24px;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 0.03em;
  font-size: 13px;
  margin-bottom: 8px;
  max-width: 610px;

  @media screen and (min-width: 1000px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`

const Description = styled.p`
  font-size: 11.5px;
  color: #84898d;
  margin-bottom: 16px;
  letter-spacing: 0.03em;
  line-height: 1.56;

  @media screen and (min-width: 600px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 600px;
    font-size: 16px;
    margin-bottom: 60px;
  }
`

const Box = styled.div`
  margin-right: 16px;
  width: 20px;
  height: 20px;
  background-color: #d7d9db;

  @media screen and (min-width: 1000px) {
    width: 32px;
    height: 32px;
  }
`

const TrustedBy = styled.div`
  display: flex;
  align-self: start;
  align-items: center;

  > p {
    font-size: 10.23px;
    color: #afb2b5;
    margin-right: 16px;
    @media screen and (min-width: 1000px) {
      font-size: 16px;
    }
  }
`

const ChangeContainer = styled.div``

export default () => {
  return (
    <SolutionsSection>
      <Laptop />

      <ChangeContainer>
        <Tag>
          Our work is always centered on your customer’s needs &amp; the
          business’ speed
        </Tag>
        <Description>
          With our service, you are our priority. We work with your
          specifications, achieve your goals, and exceed your expectations.
        </Description>
        <TrustedBy>
          <p>Trusted by</p>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </TrustedBy>
      </ChangeContainer>
    </SolutionsSection>
  )
}
