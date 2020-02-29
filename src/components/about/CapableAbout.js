import React from "react"
import styled from "styled-components"

const CapableAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e88d17;
  padding: 64px 40px;

  > p {
    font-family: ${p => p.theme.font.display};
    font-weight: 600;
    font-size: 13px;
    line-height: 1.5669;
    letter-spacing: 0.03em;
    color: #fff8ee;
    margin-bottom: 48px;
    max-width: 250px;

    @media screen and (min-width: 768px) {
      text-align: center;
    }

    @media screen and (min-width: 1024px) {
      font-size: 32px;
      max-width: 800px;
    }
  }
`

const Card = styled.div`
  margin-bottom: 32px;
  svg {
    margin-bottom: 28px;
  }

  h3 {
    font-family: ${p => p.theme.font.display};
    font-weight: bold;
    font-size: 13px;
    color: #ffd49c;
    margin-bottom: 8px;
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 10.24px;
    line-height: 1.6319;
    color: #fac786;
    max-width: 240px;

    @media screen and (min-width: 1024px) {
      font-size: 12.8px;
      max-width: 270px;
    }
  }
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    > ${Card} {
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 900px) {
    > ${Card} {
      margin-right: 16px;
    }
  }

  @media screen and (min-width: 1000px) {
    > ${Card} {
      margin-right: 32px;
    }
  }
`

export default () => (
  <CapableAboutSection>
    <p>
      As a young start-up, our people are driven by its customer obsession and
      passion for innovations that will power our go-to market strategy.
    </p>

    <Cards>
      <Card>
        <svg
          width="242"
          height="176"
          viewBox="0 0 242 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="242" height="176" fill="#C4C4C4" />
        </svg>
        <h3>We always aim for perfection</h3>
        <p>
          Our team prides ourselves in the quality of our work. We ensure no
          compromises are made as much as possible and make the after care of
          our crafted products the easier as can be.
        </p>
      </Card>
      <Card>
        <svg
          width="242"
          height="176"
          viewBox="0 0 242 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="242" height="176" fill="#C4C4C4" />
        </svg>
        <h3>We include you in the process</h3>
        <p>
          In every part of the design and development process, we loop our
          clients in to make sure that there is uniqueness and personalization
          in the products we make.
        </p>
      </Card>
      <Card>
        <svg
          width="242"
          height="176"
          viewBox="0 0 242 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="242" height="176" fill="#C4C4C4" />
        </svg>
        <h3>We drive with creative means</h3>
        <p>
          As a young company, we offer value with our creative and highly
          innovative products and technologies that’s sure to catch the eyes of
          your vast range of clientelle.
        </p>
      </Card>
    </Cards>
  </CapableAboutSection>
)
