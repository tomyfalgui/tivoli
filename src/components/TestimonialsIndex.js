import React from "react"
import styled from "styled-components"

const TestimonialSection = styled.section`
  padding: 32px;
  padding-top: 80px;
  padding-bottom: 96px;
  background-color: ${p => p.theme.primary};
  overflow: hidden;
`

const Header = styled.h2`
  letter-spacing: 0.03em;
  font-family: ${p => p.theme.font.display};
  font-weight: 600;
  color: #e8eff6;
  text-align: center;
  margin-bottom: 128px;
`

const Cards = styled.div`
  display: flex;
  overflow-x: auto;
`

export default () => (
  <TestimonialSection>
    <Header>Testimonials</Header>
    <Cards>
      <Cardd />
      <Cardd />
      <Cardd />
    </Cards>
  </TestimonialSection>
)

const Card = styled.div`
  padding: 16px;
  background-color: #3a95d5;
  border-radius: 11px;
  border: 1px solid #7bc1f2;
  padding-bottom: 40px;
  margin-right: 16px;
  flex-shrink: 0;
`
const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #5db1eb;
`

const Picture = styled.svg`
  margin-right: 12px;
`

const CardHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const CardHeaderCompany = styled.p`
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 0.03em;
  color: #e8f5ff;
`

const CardHeaderPosition = styled.p`
  font-size: 10px;
  letter-spacing: 0.03em;
  color: #aad9fa;
`

const CardBody = styled.div``
const CardBodyHeader = styled.p`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #e8eff6;
  margin-top: 16px;
`
const CardBodyDescription = styled.p`
  font-size: 10.24px;
  line-height: 1.5669;
  letter-spacing: 0.03em;
  color: #e8eff6;
  max-width: 202px;
  margin-top: 8px;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

const RatingDescription = styled.p`
  font-size: 12.8px;
  letter-spacing: 0.03em;
  color: #51a6e1;
`

function Cardd() {
  return (
    <Card>
      <CardHeader>
        <Picture
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="15.7332"
            cy="15.5"
            rx="15.5486"
            ry="15.5"
            fill="#C4C4C4"
          />
        </Picture>
        <CardHeaderDetails>
          <CardHeaderCompany>Name of Company</CardHeaderCompany>
          <CardHeaderPosition>JOHN ANTHONY SMITH, CEO</CardHeaderPosition>
        </CardHeaderDetails>
      </CardHeader>

      {/* BODY */}

      <CardBody>
        <CardBodyHeader>“It’s the most convenient one ever!”</CardBodyHeader>
        <CardBodyDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
          mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima dmi
          nimve niam, quisn ost r udexe rcitationul lam colabor isnisiutaliq
          uipexeac ommod oconse quat.
        </CardBodyDescription>
        <Rating>
          <Picture
            width="75"
            height="13"
            viewBox="0 0 75 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65877 2.00492C6.03435 1.29529 7.05089 1.29529 7.42646 2.00492L8.25033 3.56157C8.39526 3.83538 8.65891 4.02657 8.9642 4.07923L10.6989 4.37843C11.4922 4.51526 11.8069 5.48556 11.2449 6.06196L10.0217 7.3166C9.80474 7.53913 9.70358 7.84987 9.74795 8.15747L9.99823 9.89235C10.113 10.6878 9.29 11.2868 8.56834 10.9331L6.98275 10.1559C6.70511 10.0198 6.38013 10.0198 6.10248 10.1559L4.5169 10.9331C3.79523 11.2868 2.97225 10.6878 3.08701 9.89235L3.33728 8.15747C3.38166 7.84987 3.2805 7.53913 3.06355 7.3166L1.84033 6.06196C1.27837 5.48556 1.59308 4.51526 2.38638 4.37843L4.12103 4.07923C4.42633 4.02657 4.68998 3.83539 4.8349 3.56157L5.65877 2.00492Z"
              fill="#FFEE93"
            />
            <path
              d="M21.3292 2.1178C21.6981 1.38209 22.7482 1.38209 23.1171 2.1178L23.835 3.54953C23.9758 3.83047 24.2406 4.02885 24.5498 4.08514L26.1447 4.37553C26.9206 4.51679 27.2353 5.45856 26.7002 6.03786L25.5132 7.32304C25.3105 7.54246 25.2165 7.841 25.257 8.13695L25.4921 9.85752C25.6018 10.6603 24.7614 11.2534 24.0418 10.8811L22.6827 10.1779C22.3945 10.0288 22.0518 10.0288 21.7636 10.1779L20.4045 10.8811C19.6849 11.2534 18.8445 10.6603 18.9542 9.85752L19.1893 8.13695C19.2298 7.841 19.1358 7.54246 18.9331 7.32304L17.7461 6.03786C17.211 5.45856 17.5257 4.51679 18.3016 4.37553L19.8965 4.08514C20.2057 4.02885 20.4705 3.83047 20.6113 3.54953L21.3292 2.1178Z"
              fill="#FFEE93"
            />
            <path
              d="M36.697 1.90299C37.0783 1.21857 38.0629 1.21857 38.4442 1.90299L39.3749 3.5737C39.5235 3.84031 39.7856 4.0245 40.0868 4.07385L41.9615 4.38104C42.7712 4.51372 43.0853 5.51143 42.4976 6.08409L41.2384 7.31108C41.0075 7.5361 40.8992 7.85865 40.9476 8.17742L41.2126 9.92246C41.3324 10.7114 40.5253 11.316 39.8018 10.9791L37.9927 10.1367C37.7251 10.0121 37.4161 10.0121 37.1484 10.1367L35.3393 10.9791C34.6159 11.316 33.8087 10.7114 33.9285 9.92246L34.1935 8.17742C34.2419 7.85865 34.1337 7.5361 33.9027 7.31108L32.6435 6.08409C32.0558 5.51143 32.3699 4.51372 33.1797 4.38104L35.0544 4.07386C35.3555 4.0245 35.6177 3.84031 35.7662 3.5737L36.697 1.90299Z"
              fill="#FFEE93"
            />
            <path
              d="M52.0236 2.1178C52.3924 1.38209 53.4425 1.38209 53.8114 2.1178L54.5293 3.54953C54.6701 3.83047 54.9349 4.02885 55.2441 4.08514L56.8391 4.37553C57.6149 4.51679 57.9296 5.45856 57.3945 6.03786L56.2075 7.32304C56.0048 7.54246 55.9109 7.841 55.9513 8.13695L56.1865 9.85752C56.2962 10.6603 55.4557 11.2534 54.7361 10.8811L53.377 10.1779C53.0888 10.0288 52.7462 10.0288 52.4579 10.1779L51.0988 10.8811C50.3792 11.2534 49.5388 10.6603 49.6485 9.85752L49.8837 8.13695C49.9241 7.841 49.8301 7.54246 49.6275 7.32304L48.4404 6.03786C47.9054 5.45856 48.2201 4.51679 48.9959 4.37553L50.5909 4.08514C50.9001 4.02885 51.1648 3.83047 51.3057 3.54953L52.0236 2.1178Z"
              fill="#FFEE93"
            />
            <path
              d="M67.7144 2.00492C68.09 1.29529 69.1065 1.29529 69.4821 2.00492L70.306 3.56157C70.4509 3.83538 70.7146 4.02657 71.0199 4.07923L72.7545 4.37843C73.5478 4.51526 73.8625 5.48556 73.3006 6.06196L72.0774 7.3166C71.8604 7.53913 71.7592 7.84987 71.8036 8.15747L72.0539 9.89235C72.1686 10.6878 71.3457 11.2868 70.624 10.9331L69.0384 10.1559C68.7608 10.0198 68.4358 10.0198 68.1581 10.1559L66.5726 10.9331C65.8509 11.2868 65.0279 10.6878 65.1427 9.89235L65.3929 8.15747C65.4373 7.84987 65.3362 7.53913 65.1192 7.3166L63.896 6.06196C63.334 5.48556 63.6487 4.51526 64.442 4.37843L66.1767 4.07923C66.482 4.02657 66.7456 3.83539 66.8906 3.56157L67.7144 2.00492Z"
              fill="#FFEE93"
            />
          </Picture>

          <RatingDescription>5/5 stars</RatingDescription>
        </Rating>
      </CardBody>

      {/* END BODY */}
    </Card>
  )
}
