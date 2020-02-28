import React from "react"
import { Link } from "gatsby"
// import snap from "snapsvg"
import styled, { css } from "styled-components"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import NavLogo from "./NavLogo"

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${p => p.theme.primary};
  z-index: 500;
`

const Fab = styled.svg`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 150;
`
const FabPopup = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  transition: transform 0.4s ease-in;
  transform: ${p => (p.open ? "translateX(0)" : "translateX(-100%)")};
  background: #f4f7f9;
  z-index: 100;

  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-left: 40px;
  padding-right: 40px;
`

const LinkItem = styled(Link)`
  font-family: ${p => p.theme.font.display};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #2f8bcb;
  margin-bottom: 24px;
`

const InternalLink = styled.a`
  font-family: ${p => p.theme.font.display};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #e88d17;
`

const Expand = styled.div`
  margin-bottom: 24px;

  > span {
    font-family: ${p => p.theme.font.display};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #2f8bcb;
    display: flex;
    align-items: center;

    > svg {
      margin-left: 16px;
      transform: ${p => (p.rotate ? "rotate(180deg)" : "rotate(0deg)")};
      transition: transform 0.5s;
    }
  }
`

const InnerExpandedWrapper = styled.div`
  overflow: auto;
  transition: max-height 0.5s ease;
`

const InnerExpandedContent = styled.div`
  padding-top: 32px;
  padding-left: 12px;
  padding-right: 12px;
`

const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  > h2 {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    font-family: ${p => p.theme.font.display};
    color: #2f8bcb;
    margin-bottom: 8px;
  }

  > p {
    font-size: 11.5px;
    line-height: 163.19%;
    color: #4f4f4f;
  }
`

const RequestFunding = styled.a`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 12.8px;
  color: #f2f2f2;
  background-color: #2d9cdb;
  border: 1px solid #2f8bcb;
  box-sizing: border-box;
  border-radius: 46px;
  text-align: center;
  margin-top: 12px;
`

const TermsOfFunding = styled.a`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 12.8px;
  background-color: #fff;
  border: 1px solid #2f8bcb;
  box-sizing: border-box;
  border-radius: 46px;
  text-align: center;
  margin-top: 8px;
  color: #2f8bcb;
`

const Integrations = styled.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-family: ${p => p.theme.font.display};
    font-weight: bold;
    font-size: 16px;
    color: #2f8bcb;
    margin-bottom: 8px;
  }
`
const Integration = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  > h3 {
    font-weight: bold;
    font-size: 13px;
    color: #828282;
    margin-bottom: 8px;
  }

  > a {
    font-size: 12.8px;
    line-height: 163.19%;
    color: #2f8bcb;
    margin-bottom: 8px;
  }
`

const Navbar = function() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const [openAccordion, setOpenAccordion] = React.useState(false)
  const [height, setHeight] = React.useState("0px")
  const menu = React.useRef(null)
  const menuSvg = React.useRef(null)
  const expandedSection = React.useRef(null)

  React.useEffect(() => {
    return () => clearAllBodyScrollLocks()
  }, [])

  const toggleMenu = function(e) {
    if (openMenu) {
      enableBodyScroll(menu.current)
    } else {
      disableBodyScroll(menu.current)
    }
    setOpenMenu(!openMenu)
  }

  const expandSection = function(e) {
    if (openAccordion) {
      if (expandedSection.current) {
        setHeight("0px")
      }
    } else {
      if (expandedSection.current) {
        const maxHeight = expandedSection.current.scrollHeight
        setHeight(`${maxHeight}px`)
      }
    }

    setOpenAccordion(!openAccordion)
  }
  return (
    <Container open={openMenu}>
      <NavLogo open={openMenu} />
      <Fab
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
        ref={menuSvg}
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
      <FabPopup ref={menu} open={openMenu}>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/about">About Tivoli</LinkItem>
        <Expand to="/" rotate={openAccordion}>
          <span onClick={expandSection}>
            Our Solutions
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989592 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989592 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z"
                fill="#2F8BCB"
              />
            </svg>
          </span>
          <InnerExpandedWrapper
            ref={expandedSection}
            style={{ maxHeight: height }}
          >
            <InnerExpandedContent>
              <Product>
                <h2>Digital Product Funding</h2>
                <p>
                  This solution is about this and this and that and it offers
                  this and that. The pros and cons are stated as this and that.
                </p>
                <RequestFunding>Request Funding</RequestFunding>
                <TermsOfFunding>See Terms of Funding</TermsOfFunding>
              </Product>
              <Product>
                <h2>Customized Transformation</h2>
                <p>
                  This solution is about this and this and that and it offers
                  this and that. The pros and cons are stated as this and that.
                </p>
                <RequestFunding>Request Quotation</RequestFunding>
                <TermsOfFunding>Visit Portfolio</TermsOfFunding>
              </Product>
              <Integrations>
                <h2>Ready-to-Use Integrations</h2>
                <Integration>
                  <h3>AI-infused Customer Engagement</h3>
                  <a href="">Intelligent Marketing Solutions</a>
                  <a href="">Smart Sales Automation</a>
                  <a href="">Intelligent Marketing Solutions</a>
                  <a href="">Omni-channel Customer Service</a>
                </Integration>
                <Integration>
                  <h3>AI-infused Customer Engagement</h3>
                  <a href="">Cloud-based Finance and Accounting</a>
                  <a href="">Robotic Process Automation (RPA)</a>
                  <a href="">Smart Supply Chain</a>
                  <a href="">Omni-channel Customer Service</a>
                </Integration>
                <Integration>
                  <h3>E-Learning</h3>
                  <a href="">Sub unit one here</a>
                  <a href="">Sub unit two here</a>
                </Integration>
              </Integrations>
            </InnerExpandedContent>
          </InnerExpandedWrapper>
        </Expand>
        <LinkItem to="/">Community</LinkItem>
        <InternalLink href="#contact-us">Contact Us</InternalLink>
      </FabPopup>
    </Container>
  )
}

export default Navbar
