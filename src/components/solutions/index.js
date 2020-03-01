import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import placeholder from "../../images/code.jpg"

const SolutionsHomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfdff;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 420px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media screen and (min-width: 1050px) {
    align-items: stretch;
  }

  @media screen and (min-width: 1150px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 200px;
    padding-right: 200px;
  }

  > h1 {
    font-family: ${p => p.theme.font.display};
    font-weight: bold;
    font-size: 12.8px;
    line-height: 19px;
    text-transform: uppercase;
    color: #2f8bcb;
    margin-bottom: 8px;
  }

  > h2 {
    font-weight: bold;
    font-size: 16px;
    color: #828282;
    margin-bottom: 16px;

    @media screen and (min-width: 360px) {
      font-size: 20px;
    }
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1050px) {
    flex-direction: row;
    > div:not(:last-child) {
      margin-right: 20px;
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  > div:first-of-type {
    background-color: #285575;
    font-weight: bold;
    font-size: 10.24px;
    color: #f7fcff;
    width: 100%;
    padding: 8px 24px;
  }
`

const CardBody = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;

  padding: 12px;
  padding-bottom: 26px;
  @media screen and (min-width: 360px) {
    padding: 24px;
    padding-bottom: 40px;
  }

  > h3 {
    font-weight: bold;
    font-size: 16px;
    color: #2f8bcb;
    margin-bottom: 8px;
  }
  > p {
    max-width: 280px;
    font-size: 12.8px;
    line-height: 163.19%;
    color: #4f4f4f;
    margin-bottom: 12px;
  }

  > ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    > li {
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }

      :nth-of-type(1),
      :nth-of-type(2) {
        font-size: 12.8px;
        line-height: 15px;
        color: #95b8e1;
        margin-bottom: 11px;
      }

      :nth-of-type(3) {
        font-size: 12.8px;
        line-height: 15px;
        color: #bdbdbd;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
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
  font-size: 10.24px;
  margin-bottom: 8px;
  text-align: center;

  @media screen and (min-width: 360px) {
    margin-right: 8px;
    font-size: 12.8px;
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
  font-size: 10.24px;
  margin-bottom: 8px;
  text-align: center;

  @media screen and (min-width: 360px) {
    margin-right: 8px;
    font-size: 12.8px;
  }
`

export default () => (
  <SolutionsHomeSection>
    <h1>Ready-to-use integrations</h1>
    <h2>AI-infused Customer Engagement</h2>
    <Cards>
      <Card>
        <img src={placeholder} alt="" />
        <div>Intergration price starts at P12345.00</div>

        <CardBody>
          <h3>Intelligent Marketing Solutions</h3>
          <p>
            This solution is about this and this and that and it offers this and
            that. It is highly advisable to be used for companies that have this
            service.
          </p>
          <ul>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 1 here
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 2 here then
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L9 9"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 9L9 5"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Soft con naman here
            </li>
          </ul>
          <div>
            <RequestButton to="/solutions/template">Reserve Now</RequestButton>
            <LearnMore to="/solutions/template">Learn More</LearnMore>
          </div>
        </CardBody>
      </Card>
      <Card>
        <img src={placeholder} alt="" />
        <div>Intergration price starts at P12345.00</div>

        <CardBody>
          <h3>Intelligent Marketing Solutions</h3>
          <p>
            This solution is about this and this and that and it offers this and
            that. It is highly advisable to be used for companies that have this
            service.
          </p>
          <ul>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 1 here
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 2 here then
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L9 9"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 9L9 5"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Soft con naman here
            </li>
          </ul>
          <div>
            <RequestButton to="/solutions/template">Reserve Now</RequestButton>
            <LearnMore to="/solutions/template">Learn More</LearnMore>
          </div>
        </CardBody>
      </Card>
      <Card>
        <img src={placeholder} alt="" />
        <div>Intergration price starts at P12345.00</div>

        <CardBody>
          <h3>Intelligent Marketing Solutions</h3>
          <p>
            This solution is about this and this and that and it offers this and
            that. It is highly advisable to be used for companies that have this
            service.
          </p>
          <ul>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 1 here
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.72729 7.54545L5.36366 9.18182L9.7273 4.81818"
                  stroke="#95B8E1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Provide pros number 2 here then
            </li>
            <li>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L9 9"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M5 9L9 5"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Soft con naman here
            </li>
          </ul>
          <div>
            <RequestButton to="/solutions/template">Reserve Now</RequestButton>
            <LearnMore to="/solutions/template">Learn More</LearnMore>
          </div>
        </CardBody>
      </Card>
    </Cards>
  </SolutionsHomeSection>
)
