import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import big from "../../images/big.jpg"

const SolutionsTemplateSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 150px;

  @media screen and (min-width: 690px) {
    padding-top: 90px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (min-width: 790px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }

  > img {
    margin-bottom: 32px;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  > h1 {
    font-family: ${p => p.theme.font.display};
    font-weight: bold;
    font-size: 12.8px;
    text-transform: uppercase;
    color: #bdbdbd;
    margin-bottom: 8px;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  }
  > a {
    @media screen and (min-width: 600px) {
      margin-left: auto;
    }
  }
`

const RequestButton = styled(Link)`
  background-color: #2f8bcb;
  border: 1px solid #2f8bcb;
  box-sizing: border-box;
  border-radius: 46px;
  color: #f2f2f2;
  padding: 8px 24px;
  font-weight: bold;
  /* font-size: 10.24px; */
  /* margin-bottom: 8px; */
  font-size: 12.8px;
  /* margin-right: 8px; */
  text-align: center;

  @media screen and (min-width: 360px) {
  }
`

const LearnMore = styled(Link)`
  background-color: #fdfdfd;
  border: 1px solid #2f8bcb;
  box-sizing: border-box;
  font-weight: bold;
  color: #2f8bcb;
  padding: 8px 24px;
  border-radius: 46px;
  font-size: 12.8px;
  /* font-size: 10.24px; */
  /* margin-bottom: 8px; */
  text-align: center;

  @media screen and (min-width: 340px) {
    margin-left: 8px;
  }
`

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;

  @media screen and (min-width: 540px) {
    flex-direction: row;
  }
`
const Tag = styled.div`
  font-weight: bold;
  font-size: 12.8px;
  color: #969c9f;
  background-color: #eaeaea;
  border-radius: 55px;
  padding: 3px 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 540px) {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const Description = styled.div`
  > h2 {
    font-weight: bold;
    font-size: 25px;
    color: #2f8bcb;
    margin-bottom: 8px;
  }

  > p {
    font-size: 12.8px;
    letter-spacing: 0.03em;
    color: #828282;
    margin-bottom: 50px;
    max-width: 1000px;
  }

  > img {
    width: 100%;
    margin-bottom: 32px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 340px) {
    flex-direction: row;
  }
`

export default () => (
  <SolutionsTemplateSection>
    <Header>
      <h1>Ready-to-Use Integrations > AI-INFUSED CUSTOMER ENGAGEMENT</h1>
      <RequestButton to="/solutions">Reserve Now</RequestButton>
    </Header>
    <img src={big} alt="" />
    <Tags>
      <Tag>User-friendly Interface</Tag>
      <Tag>Other Inputs</Tag>
      <Tag>Any Other Quality Added</Tag>
    </Tags>
    <Description>
      <h2>Intelligent Marketing Solutions</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius mod
        tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima dmi nimve
        niam, quisn ost r udexe rcitationul lam colabor isnisiutaliq uipexeac
        ommod oconse quat. Lorem ipsum dolor sit amet, consecte tur adip iscing
        jewk jthrk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        doeius mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
        dmi nimve niam, quisn ost r udexe rcitationul lam colabor isnisiutaliq
        uipexeac ommod oconse quat. Lorem ipsum dolor sit amet, consecte tur
        adip iscing jewk jthrk.
      </p>
      <img src={big} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius mod
        tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima dmi nimve
        niam, quisn ost r udexe rcitationul lam colabor isnisiutaliq uipexeac
        ommod oconse quat. Lorem ipsum dolor sit amet, consecte tur adip iscing
        jewk jthrk. Lorem ipsum
      </p>
    </Description>
    <ButtonContainer>
      <RequestButton to="/solutions">Reserve Now</RequestButton>
      <LearnMore to="/solutions">Inquire More</LearnMore>
    </ButtonContainer>
  </SolutionsTemplateSection>
)
