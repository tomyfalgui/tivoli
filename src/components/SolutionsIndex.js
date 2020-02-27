import React from "react"
import styled from "styled-components"
import Laptop from "../assets/laptop.svg"

const SolutionsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  padding-bottom: 96px;
  background-color: ${p => p.theme.white};
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
`

const Description = styled.p`
  font-size: 11.5px;
  color: #84898d;
  margin-bottom: 16px;
  letter-spacing: 0.03em;
  line-height: 1.56;
`

const Star = styled.svg`
  margin-right: 8px;
`

const TrustedBy = styled.div`
  display: flex;
  align-self: start;
  align-items: center;

  > p {
    font-size: 10.23px;
    color: #afb2b5;
    margin-right: 16px;
  }
`

export default () => {
  return (
    <SolutionsSection>
      <Laptop />
      <Tag>
        Our work is always centered on your customer’s needs &amp; the business’
        speed
      </Tag>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius mod
        tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima dmi nimve
        niam, quisn ost r udexe rcitationul lam colabor isnisiutaliq uipexeac
        ommod.
      </Description>
      <TrustedBy>
        <p>Trusted by</p>
        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>

        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>
        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>
        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>
        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>
        <Star
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.01262 0.160889L17.6838 14.9622H0.341436L9.01262 0.160889Z"
            fill="#D7D9DB"
          />
        </Star>
      </TrustedBy>
    </SolutionsSection>
  )
}
