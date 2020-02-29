import React from "react"
import styled from "styled-components"

const PeopleAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #eeeeee;

  > h2 {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.03em;
    color: #828282;
    margin-bottom: 40px;

    @media screen and (min-width: 1024px) {
      font-size: 32px;
    }

    span {
      color: ${p => p.theme.orange};
    }
  }
`

const Founders = styled.div`
  display: flex;
  flex-direction: row;
`

const Founder = styled.div`
  margin-bottom: 40px;
  margin-right: 32px;
  svg {
    margin-bottom: 16px;
  }

  h3 {
    font-family: ${p => p.theme.font.display};
    font-weight: 600;
    font-size: 13px;
    color: #666666;
    margin-bottom: 8px;

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }

  p:first-of-type {
    font-weight: bold;
    font-size: 11.5px;
    color: #2e85c5;
    margin-bottom: 8px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  p:nth-of-type(2) {
    font-size: 10.24px;
    line-height: 1.17;
    letter-spacing: 0.03em;
    color: #c2c2c2;
    max-width: 250px;

    @media screen and (min-width: 1024px) {
      font-size: 12.8px;
    }
  }
`

export default () => (
  <PeopleAboutSection>
    <h2>
      We are a team of <span>visionaries</span>
    </h2>
    <Founders>
      <Founder>
        <svg
          width="244"
          height="267"
          viewBox="0 0 244 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.967773" width="242.064" height="266.664" fill="#C4C4C4" />
        </svg>
        <h3>Rolan Medestomas</h3>
        <p>Chief Executive Officer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
          mod tempori n ci diduntu tlabor eetdolo rema gn aliqua. Utenima dmi
          nimve niam, quisn ost r udexe rcitationul lam.
        </p>
      </Founder>
      <Founder>
        <svg
          width="244"
          height="267"
          viewBox="0 0 244 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.967773" width="242.064" height="266.664" fill="#C4C4C4" />
        </svg>
        <h3>Ronaldo &lsquo;Tet&rsquo; Aguilar</h3>
        <p>Chief Technology Officer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
          mod tempori n ci diduntu tlabor eetdolo rema gn aliqua. Utenima dmi
          nimve niam, quisn ost r udexe rcitationul lam.
        </p>
      </Founder>
    </Founders>
  </PeopleAboutSection>
)
