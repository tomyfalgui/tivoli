import React from "react"
import styled from "styled-components"

const SubFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #162557;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`

const Description = styled.p`
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 0.03em;
  color: #5e73bc;

  @media screen and (min-width: 1024px) {
    font-size: 12.8px;
  }
`

const Hide = styled.span`
  color: #41569c;
`

const ExternalLink = styled.a``

export default () => (
  <SubFooter>
    <Description>
      Tivoli Systems Solution, Corp. <Hide>2020 | All Rights Reserved.</Hide>
    </Description>
    <Description>
      <Hide>Designed by</Hide>{" "}
      <ExternalLink
        href="https://www.linkedin.com/in/camille-puentespina-79866b179/"
        target="_blank"
      >
        Camille
      </ExternalLink>{" "}
      <Hide>, Powered by</Hide>{" "}
      <ExternalLink
        target="_blank"
        href="https://www.linkedin.com/in/camille-puentespina-79866b179/"
      >
        Tomy Falgui
      </ExternalLink>
    </Description>
  </SubFooter>
)
