import React from "react"
import styled from "styled-components"
import { GhostBlueCTA } from "../Buttons"

const CraftIndex = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    270deg,
    #d0dded 0%,
    rgba(208, 221, 237, 0.3) 100%
  );
  position: relative;
  padding: 80px 40px 80px;

  > p {
    color: #617a96;
  }

  > div {
    position: relative;
    z-index: 10;
  }

  > svg {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > svg.mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  > svg.desktop {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 300px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`

const Header = styled.h2`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.03em;
  color: #2e79b5;
  font-family: ${p => p.theme.font.display};

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

const HeaderDescription = styled.p`
  font-size: 11px;
  line-height: 1.6469;
  color: #617a96;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

const Products = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    > div:first-of-type {
      margin-right: 16px;
    }
  }
`

export default () => (
  <CraftIndex>
    <Header>We craft solutions based on your company’s needs</Header>
    <HeaderDescription>
      These are some of the case studies that we have worked on from our
      previous clients, guests and business partners.
    </HeaderDescription>

    <Products>
      <Product />
      <Product1 />
    </Products>

    <svg
      viewBox="0 0 320 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mobile"
    >
      <path
        d="M143.681 73.603C-40.9224 -80.862 -196.278 46.7257 -249 104.901V166H406V104.901C380.779 116.937 305.164 208.723 143.681 73.603Z"
        fill="#2F8BCB"
      />
    </svg>
    <svg viewBox="0 0 1437 164" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M861.5 73.3813C456.5 -80.6185 115.667 46.5849 0 104.585V165.5H1437V104.585C1381.67 116.585 1215.78 208.094 861.5 73.3813Z"
        fill="#2F8BCB"
        className="desktop"
      />
    </svg>
  </CraftIndex>
)

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 333px;
  }
`

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  background-color: white;
  padding: 24px;
  padding-bottom: 40px;
  padding-top: 16px;
`

const ProductDescription = styled.p`
  font-size: 11px;
  margin-bottom: 24px;
  color: #4f4f4f;

  @media screen and (min-width: 768px) {
    font-size: 12.8px;
  }
`

const ProductHeading = styled.h3`
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  color: ${p => p.theme.primary};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

function Product() {
  return (
    <ProductWrapper>
      <svg viewBox="0 0 333 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="333" height="186" fill="#CB8170" />
        <path
          d="M89.4237 33C103.186 15.7385 154.876 3.80769 179 0H89.4237C81.3559 6.6 74.1977 16.9231 74 20.3077L89.4237 33Z"
          fill="#E88D17"
        />
        <rect
          x="103.691"
          y="35.9911"
          width="122.631"
          height="113.915"
          rx="4"
          fill="#E69381"
          fillOpacity="0.6"
        />
        <rect
          x="1"
          y="35.9911"
          width="80.7568"
          height="113.915"
          rx="4"
          fill="#BB7261"
        />
        <rect
          x="252.243"
          y="35.9911"
          width="80.7568"
          height="113.915"
          rx="4"
          fill="#BB7261"
        />
        <rect
          x="97.2147"
          y="30.4962"
          width="134.586"
          height="124.905"
          rx="2.5"
          stroke="#E8AD9F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="21 21"
        />
        <path
          d="M234.818 134.063C231.127 132.497 233.465 127.19 235.096 124.733L242.912 136.579C241.752 136.393 238.509 135.629 234.818 134.063Z"
          fill="#E1C388"
        />
        <path
          d="M237.254 116.052C253.605 107.259 258.357 119.716 258.689 127.044L245.728 138.036C243.236 138.036 241.291 138.085 238.749 135.538C236.755 133.539 234.761 127.044 232.269 120.549C231.272 116.052 215.32 106.559 220.305 105.06C224.293 103.861 233.266 111.889 237.254 116.052Z"
          fill="#E8D2A7"
        />
        <path
          d="M58.2987 59.6684C55.3712 37.8477 66.8375 26.7975 72.9366 24C78.8324 28.6625 85.7447 35.8895 85.7447 35.8895C82.6952 35.8895 81.4754 39.3864 82.0853 40.7851C85.5008 46.9397 79.4423 52.6746 76.5961 56.1715C76.5961 65.9629 72.9366 70.8585 68.6672 72.2573C66.3747 73.0084 65.4194 68.1301 65.1006 63.0785C64.4415 72.2646 61.181 81.1512 58.2987 59.6684Z"
          fill="#CDA75C"
        />
        <path
          d="M259.686 130.541C282.019 140.134 309.038 174.342 318.011 186H268.659C264.272 157.621 255.366 143.865 248.221 140.034L259.686 130.541Z"
          fill="#0C142F"
        />
        <rect
          width="18.4873"
          height="18.4873"
          transform="matrix(0.706307 0.707906 -0.706307 0.707906 318.142 108.937)"
          fill="#B46856"
        />
        <path
          d="M64.8078 57.4751C61.6174 50.6801 65.971 41.6535 67.3003 37.9896L73.2823 24C75.0159 26.3167 81.621 32.3236 84.9455 34.825C85.6019 34.5006 86.2432 34.617 86.7417 35.4914C87.2274 36.3433 86.4008 35.92 84.9455 34.825C83.5017 35.5386 81.9853 38.3852 81.7568 39.9881C84.5484 45.1842 83.2523 46.4832 76.2733 57.4751C77.7688 61.4721 74.8954 69.8591 69.2943 71.9642C65.3063 73.4631 64.4755 61.9717 64.8078 57.4751Z"
          fill="#CB9E48"
        />
        <path
          d="M70.0748 38.0522C73.5691 36.379 73.22 30.1269 72.6087 27.2099C64.1502 27.9638 62.9755 37.0275 63.16 44.3127C63.3077 50.1408 65.1569 49.2264 66.063 48.0407C65.9443 45.4084 66.5805 39.7254 70.0748 38.0522Z"
          fill="#D3B475"
        />
        <ellipse
          cx="170.489"
          cy="77.9597"
          rx="29.9099"
          ry="29.9776"
          fill="#E09381"
        />
        <rect
          x="1"
          y="76.9604"
          width="47.8559"
          height="72.9456"
          fill="#B46856"
        />
        <rect
          x="14.467"
          y="72.4657"
          width="41.8589"
          height="29.9739"
          stroke="#A65948"
          strokeWidth="5"
          strokeDasharray="40 40"
        />
        <rect
          width="39.1974"
          height="66.6809"
          rx="5"
          transform="matrix(0.9551 -0.296282 0.263197 0.964742 117.649 78.5814)"
          fill="#EDA595"
        />
        <path
          d="M122.585 85.0566C122.007 82.9242 123.251 80.6687 125.362 80.0188L149.663 72.5385C151.774 71.8885 153.954 73.0903 154.531 75.2227L168.009 125.006C168.586 127.139 167.342 129.394 165.231 130.044L140.93 137.524C138.819 138.174 136.639 136.972 136.062 134.84L122.585 85.0566Z"
          fill="#E38F7B"
        />
        <path
          d="M144.568 98.944H169.492L173.48 89.9508L176.471 104.44L181.955 85.9537L184.946 98.944L188.435 93.4481L191.925 104.44L194.417 98.944H225.823"
          stroke="#E8BAB0"
          strokeWidth="2"
        />
        <rect
          width="18.4873"
          height="18.4873"
          transform="matrix(0.706307 0.707906 -0.706307 0.707906 286.238 76.9604)"
          fill="#B46856"
        />
        <rect
          width="18.4873"
          height="18.4873"
          transform="matrix(0.706307 0.707906 -0.706307 0.707906 302.093 92.9486)"
          fill="#B46856"
        />
        <rect
          width="18.4873"
          height="18.4873"
          transform="matrix(0.706307 0.707906 -0.706307 0.707906 318.142 76.9604)"
          fill="#B46856"
        />
        <ellipse
          cx="283.15"
          cy="108.937"
          rx="12.961"
          ry="12.9903"
          fill="#A65948"
        />
      </svg>

      <ProductDetailsWrapper>
        <ProductHeading>Ready-to-Use Integration</ProductHeading>
        <ProductDescription>
          This solution is about this and this and that and it offers this and
          that. The pros and cons are stated as this and that.
        </ProductDescription>
        <GhostBlueCTA to="/solutions">Learn More</GhostBlueCTA>
      </ProductDetailsWrapper>
    </ProductWrapper>
  )
}

function Product1() {
  return (
    <ProductWrapper>
      <svg
        viewBox="0 0 333 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: "-15px" }}
      >
        <rect width="333" height="186" fill="#6C4F7E" />
        <path
          d="M130.104 42C128.104 46 129.271 54.6667 130.104 58.5C132.604 61.5 139.104 67.1 145.104 65.5C151.104 63.9 157.667 53 160.5 48.5L142.604 58.5L136.104 48.5L150 35C144.833 36.3333 132.104 38 130.104 42Z"
          fill="#C2A1CE"
        />
        <path
          d="M85.3793 67.5L96.3793 56C108.879 57.5 113.379 71 114.379 74.5C115.379 78 108.379 92 98.3793 92C88.3793 92 89.8793 86 86.8793 80.5C84.4793 76.1 84.8793 70 85.3793 67.5Z"
          fill="#B88F40"
        />
        <path
          d="M0 28.5V0H39.5C58.3 4.4 84.6667 37.8333 95.5 54L83.5 66C58.3 38 17.3333 29.3333 0 28.5Z"
          fill="#E88D17"
        />
        <rect
          x="61.9202"
          y="97.6863"
          width="81.6793"
          height="10"
          transform="rotate(-33.1678 61.9202 97.6863)"
          fill="#C2A1CE"
        />
        <path
          d="M88.6686 73.9802C83.6992 78.4917 88.427 88.3343 91.1685 89.4803C102.239 96.9616 116 82.6912 114 75.5C114.425 77.8129 110.5 81.5 107.789 79.9802C99.8233 76.8899 95.6175 67.6715 88.6686 73.9802Z"
          fill="#C9A35A"
        />
        <path
          d="M95.8793 75C88.2793 71.8 92.7126 63.3333 95.8793 59.5C118.879 59.5 109.879 86.5 101.879 87.5C95.4793 88.3 97.2126 85.1667 98.8793 83.5C101.046 82 103.479 78.2 95.8793 75Z"
          fill="#D3B475"
        />
        <path
          d="M68 108C68 114.627 62.6274 120 56 120C49.3726 120 44 114.627 44 108C44 101.373 49.3726 96 56 96C62.6274 96 68 101.373 68 108Z"
          fill="#C2A1CE"
        />
        <path d="M93 104.5L136 186H333V0.5H285.5L93 104.5Z" fill="#806194" />
        <path
          d="M271.267 70.6736C272.698 69.5921 279.019 73.8279 282 76.081C279.615 77.1324 274.129 79.7761 271.267 81.939C267.689 84.6427 264.112 83.2909 261.428 81.939C258.745 80.5872 269.478 72.0254 271.267 70.6736Z"
          fill="#E1C388"
        />
        <path
          d="M267 101.669C267 132 242.5 165.5 209 185.5L267 185.5C282 165 283 122.5 279.291 108.581L267 101.669Z"
          fill="#0C142F"
        />
        <path
          d="M290.395 87.0663C292.957 96.9857 283.866 104.068 280 106.169L268 99.6692C268.389 76.8252 266.61 80.2261 269.412 77.6473C272.213 75.0685 287.191 74.6672 290.395 87.0663Z"
          fill="#E1C388"
        />
        <rect
          x="247.889"
          y="89.0504"
          width="55.8072"
          height="7"
          transform="rotate(-22.1128 247.889 89.0504)"
          fill="#C2A1CE"
        />
        <path
          d="M266.438 74.9095C270.038 72.5095 274.271 81.2429 275.938 85.9095C277.938 86.9095 280.938 93.4095 278.938 95.9095C276.938 98.4095 269.438 94.4095 269.438 89.9095C269.438 85.4095 261.938 77.9095 266.438 74.9095Z"
          fill="#E8D2A7"
        />
        <path d="M241.5 95.5L248 89L250.5 95.5H241.5Z" fill="#D6BBE0" />
        <path
          d="M299.5 75.5C296.7 73.9 296.667 70.5 297 69L302.5 67C304.9 68.2 305.167 71.8333 305 73.5L299.5 75.5Z"
          fill="#D6BBE0"
        />
        <path
          d="M242 95.8333L217.637 99.1724L191.363 82L194.707 107.759L167 127.316L197.573 137.333L204.739 165L220.981 137.333L234.357 139.718"
          stroke="#A684BC"
          strokeWidth="3"
        />
      </svg>

      <ProductDetailsWrapper>
        <ProductHeading>Customized Transformation</ProductHeading>
        <ProductDescription>
          This solution is about this and this and that and it offers this and
          that. The pros and cons are stated as this and that.
        </ProductDescription>
        <GhostBlueCTA to="/solutions">Learn More</GhostBlueCTA>
      </ProductDetailsWrapper>
    </ProductWrapper>
  )
}
