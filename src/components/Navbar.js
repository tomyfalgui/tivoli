import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import { motion, useMotionValue, useSpring } from "framer-motion"

import NavLogo from "./NavLogo"

//#region styles
const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${p => p.theme.primary};
  z-index: 500;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`

//#region mobile-nav
const Fab = styled(motion.svg)`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 150;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
const FabPopup = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform 0.4s ease-in;
  transform: ${p => (p.open ? "translateX(0)" : "translateX(-100%)")};
  background: #f4f7f9;
  z-index: 100;

  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
const LinkItem = styled(Link)`
  font-family: ${p => p.theme.font.display};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #2f8bcb;
  margin-bottom: 24px;
`

const InternalLink = styled(Link)`
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
      transform: ${p =>
        p.rotate === "yes" ? "rotate(180deg)" : "rotate(0deg)"};
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
//#endregion

const NavItems = styled.ul`
  margin-left: auto;
  display: none;

  > li {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
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

    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  > p {
    font-size: 11.5px;
    line-height: 163.19%;
    color: #4f4f4f;
    @media screen and (min-width: 768px) {
      font-size: 12.8px;
      margin-bottom: 24px;
      max-width: 430px;
    }
  }
`

const RequestFunding = styled(Link)`
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

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 0;
    margin-right: 8px;
  }
`

const TermsOfFunding = styled(Link)`
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

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 0;
  }
`

const NavItemLink = styled(Link)`
  font-weight: bold;
  font-size: 12.8px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #cae7fb;
  &.active {
    color: #56ccf2;

    > svg {
      fill: #56ccf2;
    }
  }

  margin-right: 24px;

  > svg {
    margin-left: 8px;
    display: inline-block;
    fill: #cae7fb;
  }
`

const Expander = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 500;
  background-color: #fff;
  left: 0;
  top: 62px;
  width: 100%;
  padding-top: 80px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 130px;

  @media screen and (min-width: 1440px) {
    padding-left: 200px;
  }
`

const ExpanderParent = styled.li`
  display: flex;
  margin-right: 24px;

  > a {
    margin-right: 0;
  }
  &:hover > ${Expander} {
    display: flex;
  }
`

const Products = styled.div`
  display: flex;
  margin-bottom: 88px;

  > div:first-of-type {
    margin-right: 35px;
  }
  @media screen and (min-width: 1024px) {
    > div:first-of-type {
      margin-right: 90px;
    }
  }
`

const MainIntegrations = styled.div`
  h2 {
    font-family: ${p => p.theme.font.display};
    font-weight: bold;
    font-size: 20px;
    color: #2f8bcb;
    margin-bottom: 24px;
  }
`

const SubIntegrations = styled.div`
  display: flex;
`
const SubIntegration = styled.div`
  margin-right: 24px;

  @media screen and (min-width: 1024px) {
    margin-right: 60px;
  }

  > h3 {
    font-weight: bold;
    font-size: 16px;
    color: #828282;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 24px;
  }
  li {
    margin-top: 8px;
  }

  li > a {
    font-size: 12.8px;
    color: #2f8bcb;
  }
`

const ContactUs = styled(Link)`
  background-color: #2f8bcb;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 46px;
  padding: 8px 24px;
  font-weight: bold;
  font-size: 12.8px;
  line-height: 15px;
  color: #f2f2f2;
`
//#endregion
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

  const first = useMotionValue(50.5)
  const firstSpring = useSpring(50.5, { stiffness: 300 })
  const toggleMenu = function(e) {
    if (openMenu) {
      enableBodyScroll(menu.current)
      first.set(50.5)
    } else {
      disableBodyScroll(menu.current)
      first.set(39.5)
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

  const variant1 = {
    opened: { x1: "31.5", y1: "36.5", x2: 39.5, y2: "36.5" },
    closed: { x1: "31.5", y1: "36.5", x2: 50.5, y2: "36.5" },
  }

  const variant2 = {
    opened: { x1: 41.5, y1: "48.5", x2: "50.5", y2: "48.5" },
    closed: { x1: 31.5, y1: "48.5", x2: "50.5", y2: "48.5" },
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

        <motion.line
          initial={"closed"}
          animate={openMenu ? "opened" : "closed"}
          variants={variant1}
          transition={{ ease: "easeOut", duration: 0.2 }}
          stroke="#CAE7FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.line
          initial={"closed"}
          animate={openMenu ? "opened" : "closed"}
          variants={variant2}
          transition={{ ease: "easeOut", duration: 0.2 }}
          stroke="#CAE7FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.line
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
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
        <Expand rotate={openAccordion ? "yes" : "no"} role="">
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
                <RequestFunding to="/solutions">Request Funding</RequestFunding>
                <TermsOfFunding to="/solutions">
                  See Terms of Funding
                </TermsOfFunding>
              </Product>
              <Product>
                <h2>Customized Transformation</h2>
                <p>
                  This solution is about this and this and that and it offers
                  this and that. The pros and cons are stated as this and that.
                </p>
                <RequestFunding to="/solutions">
                  Request Quotation
                </RequestFunding>
                <TermsOfFunding to="/portfolio">Visit Portfolio</TermsOfFunding>
              </Product>
              <Integrations>
                <h2>Ready-to-Use Integrations</h2>
                <Integration>
                  <h3>AI-infused Customer Engagement</h3>
                  <Link to="/solutions">Intelligent Marketing Solutions</Link>
                  <Link to="/solutions">Smart Sales Automation</Link>
                  <Link to="/solutions">Intelligent Marketing Solutions</Link>
                  <Link to="/solutions">Omni-channel Customer Service</Link>
                </Integration>
                <Integration>
                  <h3>AI-infused Customer Engagement</h3>
                  <Link to="/solutions">
                    Cloud-based Finance and Accounting
                  </Link>
                  <Link to="/solutions">Robotic Process Automation (RPA)</Link>
                  <Link to="/solutions">Smart Supply Chain</Link>
                  <Link to="/solutions">Omni-channel Customer Service</Link>
                </Integration>
                <Integration>
                  <h3>E-Learning</h3>
                  <Link to="/solutions">Sub unit one here</Link>
                  <Link to="/solutions">Sub unit two here</Link>
                </Integration>
              </Integrations>
            </InnerExpandedContent>
          </InnerExpandedWrapper>
        </Expand>
        <LinkItem to="/portfolio">Portfolio</LinkItem>
        <LinkItem to="/community">Community</LinkItem>
        <InternalLink to="/contact-us">Contact Us</InternalLink>
      </FabPopup>
      <NavItems>
        <li>
          <NavItemLink activeClassName="active" to="/">
            Home
          </NavItemLink>
        </li>
        <li>
          <NavItemLink activeClassName="active" to="/about">
            About Tivoli
          </NavItemLink>
        </li>
        <ExpanderParent>
          <NavItemLink activeClassName="active" to="/solutions">
            Our Solutions{" "}
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976312 7.7308 0.659729 7.53553 0.464467C7.34027 0.269205 7.02369 0.269205 6.82843 0.464467L4 3.29289L1.17157 0.464465C0.976312 0.269203 0.659729 0.269203 0.464467 0.464465C0.269205 0.659727 0.269205 0.97631 0.464467 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z" />
            </svg>
          </NavItemLink>

          <Expander>
            <Products>
              <Product>
                <h2>Digital Product Funding</h2>
                <p>
                  This solution is about this and this and that and it offers
                  this and that. The pros and cons are stated as this and that.
                </p>
                <div>
                  <RequestFunding to="/solutions">
                    Request Funding
                  </RequestFunding>
                  <TermsOfFunding to="/solutions">
                    See Terms of Funding
                  </TermsOfFunding>
                </div>
              </Product>
              <Product>
                <h2>Customized Transformation</h2>
                <p>
                  This solution is about this and this and that and it offers
                  this and that. The pros and cons are stated as this and that.
                </p>
                <div>
                  <RequestFunding to="/solutions">
                    Request Quotation
                  </RequestFunding>
                  <TermsOfFunding to="/portfolio">
                    Visit Portfolio
                  </TermsOfFunding>
                </div>
              </Product>
            </Products>
            <MainIntegrations>
              <h2>Ready-to-Use Integrations</h2>
              <SubIntegrations>
                <SubIntegration>
                  <h3>AI-infused Customer Engagement</h3>
                  <ul>
                    <li>
                      <Link to="/solutions">
                        Intelligent Marketing Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions">Smart Sales Automation</Link>
                    </li>
                    <li>
                      <Link to="/solutions">Omni-channel Customer Service</Link>
                    </li>
                  </ul>
                </SubIntegration>
                <SubIntegration>
                  <h3>AI-Infused Finance and Operations</h3>
                  <ul>
                    <li>
                      <Link to="/solutions">
                        Cloud-based Finance and Accounting
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions">
                        Robotic Process Automation (RPA)
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions">Smart Supply Chain</Link>
                    </li>
                  </ul>
                </SubIntegration>
                <SubIntegration>
                  <h3>E-Learning</h3>
                  <ul>
                    <li>
                      <Link to="/solutions">Sub unit one here</Link>
                    </li>
                    <li>
                      <Link to="/solutions">Sub unit two here</Link>
                    </li>
                  </ul>
                </SubIntegration>
              </SubIntegrations>
            </MainIntegrations>
          </Expander>
        </ExpanderParent>
        <li>
          <NavItemLink activeClassName="active" to="/portfolio">
            Portfolio
          </NavItemLink>
        </li>
        <li>
          <NavItemLink activeClassName="active" to="/community">
            Community
          </NavItemLink>
        </li>
        <ContactUs to="/contact-us">Contact Us</ContactUs>
      </NavItems>
    </Container>
  )
}

export default Navbar
