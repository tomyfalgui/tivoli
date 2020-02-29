import { Link } from "gatsby"
import styled from "styled-components"
const BaseButton = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #2f8bcb;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  border: 1px solid white;
  border-radius: 46px;

  @media screen and (min-width: 768px) {
    padding: 8px 24px;
    width: auto;
  }
`

export const PrimaryCTA = styled(BaseButton)`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`
export const GhostCTA = styled(BaseButton)`
  background-color: transparent;
  color: white;
`
export const GhostBlueCTA = styled(BaseButton)`
  color: ${p => p.theme.primary};
  border-color: ${p => p.theme.primary};

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: auto;
  }
`

export const ContactUsBtn = styled.button`
  font-weight: bold;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0;
  border-radius: 46px;
  background-color: #3270a9;
  color: #f2f2f2;

  @media screen and (min-width: 1024px) {
    align-self: flex-start;
    width: auto;
    font-size: 12.8px;
    padding: 8px 24px;
  }
`
