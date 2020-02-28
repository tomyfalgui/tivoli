import React from "react"
import styled from "styled-components"

const MilestonesAboutSection = styled.section`
  padding: 40px;
  padding-top: 80px;
  padding-bottom: 200px;
  position: relative;
  /* overflow-x: hidden; */
  background-color: #ffffff;

  > h2 {
    font-family: ${p => p.theme.font.display};
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #b6b6b6;
  }

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const TimelineContainer = styled.div`
  display: flex;
  padding-top: 104px;
  overflow-x: auto;

  position: relative;
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 870px;
    height: 1px;
    background-color: #dddddd;
    top: 78px;
    left: 40px;
    z-index: 1;
  }
`
const TimelineItem = styled.div`
  flex-shrink: 0;
  margin-right: ${props => (props.double ? "80px" : "40px")};
`
const TimelineContent = styled.div`
  position: relative;

  h3 {
    font-weight: 600;
    font-size: 12.8px;
    line-height: 1.5669;
    letter-spacing: 0.03em;
    margin-bottom: 12px;
    color: #2f8bcb;
  }

  p {
    font-size: 10.24px;
    line-height: 1.17;
    letter-spacing: 0.03em;
    color: #c2c2c2;
    max-width: 157px;
  }

  .date {
    font-family: ${p => p.theme.font.display};
    position: absolute;
    font-weight: 600;
    font-size: 12.8px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #cbcbcb;
    top: -70px;
    left: 35px;
  }

  .circle {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    border: 1px solid #d0d0d0;
    top: -36px;
    left: 40px;
    z-index: 100;
  }
`

export default () => (
  <MilestonesAboutSection>
    <h2>Our Company Milestones</h2>
    <TimelineContainer>
      <TimelineItem>
        <TimelineContent>
          <h3>Company Founded</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
            mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
            dmi nimve niam, quisn ost r udexe rcitationul lam colabor
            isnisiutaliq.
          </p>
          <span className="circle"></span>
          <span className="date">2019</span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem double>
        <TimelineContent>
          <h3>First Deployment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
            mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
            dmi nimve niam, quisn ost r udexe rcitationul lam colabor
            isnisiutaliq.
          </p>
          <span className="circle"></span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <h3>Seeding Required</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
            mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
            dmi nimve niam, quisn ost r udexe rcitationul lam colabor
            isnisiutaliq.
          </p>
          <span className="circle"></span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem double>
        <TimelineContent>
          <h3>Tech Updated</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
            mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
            dmi nimve niam, quisn ost r udexe rcitationul lam colabor
            isnisiutaliq.
          </p>
          <span className="circle"></span>
          <span className="date">2020</span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <h3>Products Reviewed</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeius
            mod tempori n ci diduntu tlabor eetdolo rema gn a aliqua. Utenima
            dmi nimve niam, quisn ost r udexe rcitationul lam colabor
            isnisiutaliq.
          </p>
          <span className="circle"></span>
        </TimelineContent>
      </TimelineItem>
    </TimelineContainer>
    <svg viewBox="0 0 320 167" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M252.741 74.0464C450.309 -81.3492 616.575 47.0071 673 105.533V167H-28V103.934C-1.0072 116.042 79.9171 209.98 252.741 74.0464Z"
        fill="#EEEEEE"
      />
    </svg>
  </MilestonesAboutSection>
)
