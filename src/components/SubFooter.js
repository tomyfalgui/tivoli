import React from "react"
import styled from "styled-components"

const SubFooter = styled.div`
  background-color: #162557;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
`

const Description = styled.p`
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 0.03em;
  color: #5e73bc;
`

const Hide = styled.span`
  color: #41569c;
`

export default () => (
  <SubFooter>
    <Description>
      Tivoli Systems Solution, Inc. <Hide>2020 | All Rights Reserved.</Hide>
    </Description>
    <Description>
      <Hide>Designed by</Hide> Camille<Hide>, Powered by</Hide> Tomy Falgui
    </Description>
  </SubFooter>
)
