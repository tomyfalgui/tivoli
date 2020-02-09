import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const CtaLinkInternal = styled.a`
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-size: 12.8px;
  font-weight: bold;
  color: #f2f2f2;
  padding: 8px 24px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 46px;

  ${p =>
    p.inverted === "yes" &&
    css`
      background-color: #f2f2f2;
      color: #2f8bcb;
    `}
`

export const CtaLinkExternal = styled(Link)`
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-size: 12.8px;
  font-weight: bold;
  color: #f2f2f2;
  padding: 8px 24px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 46px;
  margin-right: ${p => `${p.right}px`};
  ${p =>
    p.inverted === "yes" &&
    css`
      background-color: #f2f2f2;
      color: #2f8bcb;
    `}
`
