import React from "react"
import styled from "styled-components"
import { GhostBlueCTA } from "./Buttons"

const CraftIndex = styled.section`
  background-image: linear-gradient(
    270deg,
    #d0dded 0%,
    rgba(208, 221, 237, 0.3) 100%
  );

  > p {
    color: #617a96;
  }

  > div {
    position: relative;
    z-index: 10;
  }

  > svg {
  }
`

export default () => (
  <CraftIndex className="p-10 py-20 relative">
    <h2 className="font-display text-primary-blue font-semibold text-lg leading-relaxed tracking-wide mb-2">
      We craft solutions based on your company’s needs
    </h2>
    <p className="text-sm leading-relaxed mb-12">
      These are some of the case studies that we have worked on from our
      previous clients, guests and business partners.
    </p>
    <div className="flex flex-col shadow-xl mb-10">
      <svg viewBox="0 0 243 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="243" height="136.459" fill="#678A68" />
        <path
          d="M170.139 71.2217L168.619 69.1498C166.948 66.8758 166.923 63.7932 168.569 61.4938L170.063 59.3967C172.341 56.1877 171.278 51.6902 167.809 49.8204L165.53 48.6076C163.049 47.2684 161.682 44.5143 162.163 41.7349L162.593 39.1829C163.252 35.2918 160.34 31.7038 156.39 31.5522L153.807 31.4512C150.997 31.3248 148.566 29.4298 147.781 26.7262L147.072 24.25C145.984 20.4599 141.806 18.4891 138.16 20.0557L135.78 21.0663C133.197 22.1781 130.184 21.5212 128.285 19.424L126.563 17.5037C123.93 14.5727 119.297 14.5979 116.714 17.5795L115.018 19.5251C113.169 21.6475 110.156 22.355 107.548 21.2938L105.168 20.3083C101.522 18.7923 97.3698 20.8389 96.3317 24.629L95.6481 27.1052C94.9138 29.8088 92.5084 31.7544 89.6979 31.9312L87.1153 32.0828C83.1654 32.3102 80.3043 35.9487 81.0386 39.8146L81.4943 42.3413C82.0007 45.1207 80.6841 47.9001 78.2281 49.2645L75.9746 50.5279C72.5058 52.4482 71.5184 56.9458 73.8478 60.1294L75.367 62.2013C77.0381 64.4754 77.0634 67.558 75.4176 69.8573L73.9237 71.9545C71.645 75.1634 72.7084 79.6609 76.1772 81.5307L78.456 82.7435C80.9373 84.0827 82.3046 86.8368 81.8235 89.6162L81.3931 92.1682C80.7347 96.0594 83.6465 99.6473 87.5964 99.7989L90.179 99.9C92.9895 100.026 95.4202 101.921 96.2051 104.625L96.914 107.101C98.0028 110.891 102.181 112.862 105.827 111.295L108.207 110.285C110.789 109.173 113.802 109.83 115.701 111.927L117.423 113.847C120.056 116.778 124.69 116.753 127.272 113.772L128.969 111.826C130.817 109.704 133.83 108.996 136.438 110.057L138.818 111.043C142.464 112.559 146.617 110.512 147.655 106.722L148.338 104.246C149.073 101.542 151.478 99.5968 154.288 99.4199L156.871 99.2683C160.821 99.0409 163.682 95.4024 162.948 91.5365L162.492 89.0098C161.986 86.2304 163.302 83.451 165.758 82.0866L168.012 80.8232C171.481 78.9282 172.468 74.4054 170.139 71.2217ZM121.955 98.5103C103.801 98.5103 89.0396 83.7795 89.0396 65.6629C89.0396 47.5464 103.801 32.8156 121.955 32.8156C140.109 32.8156 154.871 47.5464 154.871 65.6629C154.871 83.7795 140.109 98.5103 121.955 98.5103Z"
          fill="#789F79"
        />
        <path
          d="M123.282 82.2645V77.9025C126.479 77.5247 128.948 75.227 128.948 72.4492C128.948 69.6738 126.479 67.3774 123.282 66.9996V59.6861C125.461 60.0175 127.11 61.5024 127.11 63.2799C127.11 63.7906 127.521 64.204 128.029 64.204C128.537 64.204 128.948 63.7906 128.948 63.2799C128.948 60.5021 126.478 58.2037 123.282 57.8279V53.4646C123.282 52.9539 122.871 52.5405 122.363 52.5405C121.855 52.5405 121.444 52.9539 121.444 53.4646V57.8285C118.245 58.2044 115.772 60.5027 115.772 63.2812C115.772 66.0565 118.245 68.3523 121.444 68.7282V76.0461C119.262 75.7161 117.61 74.2298 117.61 72.4498C117.61 71.9391 117.199 71.5258 116.691 71.5258C116.183 71.5258 115.772 71.9391 115.772 72.4498C115.772 75.2302 118.245 77.5298 121.444 77.9044V82.2652C121.444 82.7758 121.855 83.1892 122.363 83.1892C122.871 83.1892 123.282 82.7752 123.282 82.2645ZM127.11 72.4492C127.11 74.2267 125.462 75.7116 123.282 76.0442V68.8579C125.462 69.1905 127.11 70.6736 127.11 72.4492ZM117.61 63.2806C117.61 61.5024 119.262 60.0175 121.444 59.6868V66.8693C119.262 66.5386 117.61 65.0562 117.61 63.2806Z"
          fill="#A2C7A3"
        />
        <path
          d="M141.392 68.229C141.392 57.566 132.69 48.8918 121.994 48.8918C111.297 48.8918 102.595 57.566 102.595 68.229C102.595 78.8921 111.297 87.5675 121.994 87.5675C132.69 87.5675 141.392 78.8921 141.392 68.229ZM104.43 68.229C104.43 58.5752 112.309 50.7215 121.994 50.7215C131.678 50.7215 139.557 58.5752 139.557 68.229C139.557 77.8835 131.678 85.7379 121.994 85.7379C112.309 85.7379 104.43 77.8841 104.43 68.229Z"
          fill="#789F79"
        />
        <path
          d="M83.9189 68.5945C37.2162 65.0918 8.51351 89.027 0 101.432V136.459H20.7973C37.4351 92.0918 69.8108 82.4594 83.9189 83.1891V68.5945Z"
          fill="#0C142F"
        />
        <path
          d="M91.2489 65.8013C88.6871 67.5879 86.5217 71.0122 85.7593 72.501V83.5541C87.1317 81.7675 91.2489 82.6671 97.196 83.5541C102.02 84.2736 104.363 81.2851 104.973 79.6474C103.545 78.9966 106.746 75.9315 104.973 71.6077C103.907 69.0075 97.4708 66.5222 97.196 62.2281C96.464 50.7939 92.9263 51.8063 91.2489 53.7418C92.3163 57.0172 93.8107 64.0147 91.2489 65.8013Z"
          fill="#D3B475"
        />
        <path
          d="M159.081 68.5944C205.784 72.0971 234.486 48.162 243 35.7566L243 0.729561L222.203 0.729559C205.565 45.0971 173.189 54.7296 159.081 53.9998L159.081 68.5944Z"
          fill="#E88D17"
        />
        <path
          d="M132.978 30.0609C130.416 32.2501 132.978 41.0068 134.076 45.7501C135.418 50.6149 140.297 57.5245 138.102 47.2095C135.54 35.169 134.367 28.8736 132.978 30.0609Z"
          fill="#C49C50"
        />
        <path
          d="M139.906 31.0538C136.886 32.5551 137.232 41.6702 137.139 46.5372C137.252 51.5814 140.296 59.4674 140.687 48.9301C141.143 36.63 141.544 30.2395 139.906 31.0538Z"
          fill="#C19846"
        />
        <path
          d="M130.127 36.4982C136.483 50.4973 151.022 54.2887 157.496 54.4346V67.9962C156.466 66.538 152.729 64.1465 146.019 66.2463C137.631 68.8712 132.775 67.5587 128.802 66.2463C125.624 65.1964 127.184 63.4757 128.361 62.7465C140.721 69.7461 146.901 52.092 134.982 54.4346C125.447 56.3087 125.712 59.8818 127.036 61.4341C126.889 63.4757 125.889 66.3338 123.063 61.4341C120.238 56.5344 126.595 49.4765 130.127 46.5601C124.921 41.3611 122.181 18.9993 130.127 36.4982Z"
          fill="#D3B475"
        />
        <path
          d="M96.1455 67.9858C96.8624 65.9027 103.912 65.0927 107.347 64.948C110.035 64.7492 111.379 77.967 111.379 80.1368C111.379 82.3066 103.762 84.0425 98.8338 82.7406C93.9053 81.4387 95.2494 70.5896 96.1455 67.9858Z"
          fill="#E8D2A7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M67.2825 30.8652L68.9222 30.221L67.2825 29.5768L66.3602 26.1948L65.4378 29.5768L63.7981 30.221L65.4378 30.8652L66.3602 34.2471L67.2825 30.8652ZM74.5692 24.4214L73.6803 21.1621L72.7915 24.4214L71.1183 25.1883L72.7915 25.9552L73.6803 29.2144L74.5692 25.9552L76.2424 25.1883L74.5692 24.4214ZM73.1052 36.4999L72.2163 33.2406L71.3274 36.4999L69.6542 37.2667L71.3274 38.0336L72.2163 41.2929L73.1052 38.0336L74.7784 37.2667L73.1052 36.4999ZM67.7945 28.6976L66.3602 23.1752L64.9258 28.6976L61.6021 30.221L64.9258 31.7444L66.3602 37.2667L67.7945 31.7444L71.1183 30.221L67.7945 28.6976Z"
          fill="#93BE94"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M165.113 113.571L163.719 113.007L165.113 112.444L165.897 109.485L166.681 112.444L168.074 113.007L166.681 113.571L165.897 116.53L165.113 113.571ZM158.919 107.933L159.674 105.081L160.43 107.933L161.852 108.604L160.43 109.275L159.674 112.127L158.919 109.275L157.497 108.604L158.919 107.933ZM164.677 111.674L165.897 106.842L167.116 111.674L169.941 113.007L167.116 114.34L165.897 119.172L164.677 114.34L161.852 113.007L164.677 111.674Z"
          fill="#93BE94"
        />
      </svg>
      <div className="bg-white px-8 pt-4 pb-10 rounded-b-small">
        <h3 className="font-display font-bold text-primary-blue mb-2">
          Digital Project Funding
        </h3>
        <p className="text-xs mb-6 text-gray-700">
          This solution is about this and this and that and it offers this and
          that. The pros and cons are stated as this and that.
        </p>
        <GhostBlueCTA>Learn More</GhostBlueCTA>
      </div>
    </div>
    <div className="flex flex-col shadow-xl mb-10">
      <svg viewBox="0 0 243 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="243" height="136.459" fill="#678A68" />
        <path
          d="M170.139 71.2217L168.619 69.1498C166.948 66.8758 166.923 63.7932 168.569 61.4938L170.063 59.3967C172.341 56.1877 171.278 51.6902 167.809 49.8204L165.53 48.6076C163.049 47.2684 161.682 44.5143 162.163 41.7349L162.593 39.1829C163.252 35.2918 160.34 31.7038 156.39 31.5522L153.807 31.4512C150.997 31.3248 148.566 29.4298 147.781 26.7262L147.072 24.25C145.984 20.4599 141.806 18.4891 138.16 20.0557L135.78 21.0663C133.197 22.1781 130.184 21.5212 128.285 19.424L126.563 17.5037C123.93 14.5727 119.297 14.5979 116.714 17.5795L115.018 19.5251C113.169 21.6475 110.156 22.355 107.548 21.2938L105.168 20.3083C101.522 18.7923 97.3698 20.8389 96.3317 24.629L95.6481 27.1052C94.9138 29.8088 92.5084 31.7544 89.6979 31.9312L87.1153 32.0828C83.1654 32.3102 80.3043 35.9487 81.0386 39.8146L81.4943 42.3413C82.0007 45.1207 80.6841 47.9001 78.2281 49.2645L75.9746 50.5279C72.5058 52.4482 71.5184 56.9458 73.8478 60.1294L75.367 62.2013C77.0381 64.4754 77.0634 67.558 75.4176 69.8573L73.9237 71.9545C71.645 75.1634 72.7084 79.6609 76.1772 81.5307L78.456 82.7435C80.9373 84.0827 82.3046 86.8368 81.8235 89.6162L81.3931 92.1682C80.7347 96.0594 83.6465 99.6473 87.5964 99.7989L90.179 99.9C92.9895 100.026 95.4202 101.921 96.2051 104.625L96.914 107.101C98.0028 110.891 102.181 112.862 105.827 111.295L108.207 110.285C110.789 109.173 113.802 109.83 115.701 111.927L117.423 113.847C120.056 116.778 124.69 116.753 127.272 113.772L128.969 111.826C130.817 109.704 133.83 108.996 136.438 110.057L138.818 111.043C142.464 112.559 146.617 110.512 147.655 106.722L148.338 104.246C149.073 101.542 151.478 99.5968 154.288 99.4199L156.871 99.2683C160.821 99.0409 163.682 95.4024 162.948 91.5365L162.492 89.0098C161.986 86.2304 163.302 83.451 165.758 82.0866L168.012 80.8232C171.481 78.9282 172.468 74.4054 170.139 71.2217ZM121.955 98.5103C103.801 98.5103 89.0396 83.7795 89.0396 65.6629C89.0396 47.5464 103.801 32.8156 121.955 32.8156C140.109 32.8156 154.871 47.5464 154.871 65.6629C154.871 83.7795 140.109 98.5103 121.955 98.5103Z"
          fill="#789F79"
        />
        <path
          d="M123.282 82.2645V77.9025C126.479 77.5247 128.948 75.227 128.948 72.4492C128.948 69.6738 126.479 67.3774 123.282 66.9996V59.6861C125.461 60.0175 127.11 61.5024 127.11 63.2799C127.11 63.7906 127.521 64.204 128.029 64.204C128.537 64.204 128.948 63.7906 128.948 63.2799C128.948 60.5021 126.478 58.2037 123.282 57.8279V53.4646C123.282 52.9539 122.871 52.5405 122.363 52.5405C121.855 52.5405 121.444 52.9539 121.444 53.4646V57.8285C118.245 58.2044 115.772 60.5027 115.772 63.2812C115.772 66.0565 118.245 68.3523 121.444 68.7282V76.0461C119.262 75.7161 117.61 74.2298 117.61 72.4498C117.61 71.9391 117.199 71.5258 116.691 71.5258C116.183 71.5258 115.772 71.9391 115.772 72.4498C115.772 75.2302 118.245 77.5298 121.444 77.9044V82.2652C121.444 82.7758 121.855 83.1892 122.363 83.1892C122.871 83.1892 123.282 82.7752 123.282 82.2645ZM127.11 72.4492C127.11 74.2267 125.462 75.7116 123.282 76.0442V68.8579C125.462 69.1905 127.11 70.6736 127.11 72.4492ZM117.61 63.2806C117.61 61.5024 119.262 60.0175 121.444 59.6868V66.8693C119.262 66.5386 117.61 65.0562 117.61 63.2806Z"
          fill="#A2C7A3"
        />
        <path
          d="M141.392 68.229C141.392 57.566 132.69 48.8918 121.994 48.8918C111.297 48.8918 102.595 57.566 102.595 68.229C102.595 78.8921 111.297 87.5675 121.994 87.5675C132.69 87.5675 141.392 78.8921 141.392 68.229ZM104.43 68.229C104.43 58.5752 112.309 50.7215 121.994 50.7215C131.678 50.7215 139.557 58.5752 139.557 68.229C139.557 77.8835 131.678 85.7379 121.994 85.7379C112.309 85.7379 104.43 77.8841 104.43 68.229Z"
          fill="#789F79"
        />
        <path
          d="M83.9189 68.5945C37.2162 65.0918 8.51351 89.027 0 101.432V136.459H20.7973C37.4351 92.0918 69.8108 82.4594 83.9189 83.1891V68.5945Z"
          fill="#0C142F"
        />
        <path
          d="M91.2489 65.8013C88.6871 67.5879 86.5217 71.0122 85.7593 72.501V83.5541C87.1317 81.7675 91.2489 82.6671 97.196 83.5541C102.02 84.2736 104.363 81.2851 104.973 79.6474C103.545 78.9966 106.746 75.9315 104.973 71.6077C103.907 69.0075 97.4708 66.5222 97.196 62.2281C96.464 50.7939 92.9263 51.8063 91.2489 53.7418C92.3163 57.0172 93.8107 64.0147 91.2489 65.8013Z"
          fill="#D3B475"
        />
        <path
          d="M159.081 68.5944C205.784 72.0971 234.486 48.162 243 35.7566L243 0.729561L222.203 0.729559C205.565 45.0971 173.189 54.7296 159.081 53.9998L159.081 68.5944Z"
          fill="#E88D17"
        />
        <path
          d="M132.978 30.0609C130.416 32.2501 132.978 41.0068 134.076 45.7501C135.418 50.6149 140.297 57.5245 138.102 47.2095C135.54 35.169 134.367 28.8736 132.978 30.0609Z"
          fill="#C49C50"
        />
        <path
          d="M139.906 31.0538C136.886 32.5551 137.232 41.6702 137.139 46.5372C137.252 51.5814 140.296 59.4674 140.687 48.9301C141.143 36.63 141.544 30.2395 139.906 31.0538Z"
          fill="#C19846"
        />
        <path
          d="M130.127 36.4982C136.483 50.4973 151.022 54.2887 157.496 54.4346V67.9962C156.466 66.538 152.729 64.1465 146.019 66.2463C137.631 68.8712 132.775 67.5587 128.802 66.2463C125.624 65.1964 127.184 63.4757 128.361 62.7465C140.721 69.7461 146.901 52.092 134.982 54.4346C125.447 56.3087 125.712 59.8818 127.036 61.4341C126.889 63.4757 125.889 66.3338 123.063 61.4341C120.238 56.5344 126.595 49.4765 130.127 46.5601C124.921 41.3611 122.181 18.9993 130.127 36.4982Z"
          fill="#D3B475"
        />
        <path
          d="M96.1455 67.9858C96.8624 65.9027 103.912 65.0927 107.347 64.948C110.035 64.7492 111.379 77.967 111.379 80.1368C111.379 82.3066 103.762 84.0425 98.8338 82.7406C93.9053 81.4387 95.2494 70.5896 96.1455 67.9858Z"
          fill="#E8D2A7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M67.2825 30.8652L68.9222 30.221L67.2825 29.5768L66.3602 26.1948L65.4378 29.5768L63.7981 30.221L65.4378 30.8652L66.3602 34.2471L67.2825 30.8652ZM74.5692 24.4214L73.6803 21.1621L72.7915 24.4214L71.1183 25.1883L72.7915 25.9552L73.6803 29.2144L74.5692 25.9552L76.2424 25.1883L74.5692 24.4214ZM73.1052 36.4999L72.2163 33.2406L71.3274 36.4999L69.6542 37.2667L71.3274 38.0336L72.2163 41.2929L73.1052 38.0336L74.7784 37.2667L73.1052 36.4999ZM67.7945 28.6976L66.3602 23.1752L64.9258 28.6976L61.6021 30.221L64.9258 31.7444L66.3602 37.2667L67.7945 31.7444L71.1183 30.221L67.7945 28.6976Z"
          fill="#93BE94"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M165.113 113.571L163.719 113.007L165.113 112.444L165.897 109.485L166.681 112.444L168.074 113.007L166.681 113.571L165.897 116.53L165.113 113.571ZM158.919 107.933L159.674 105.081L160.43 107.933L161.852 108.604L160.43 109.275L159.674 112.127L158.919 109.275L157.497 108.604L158.919 107.933ZM164.677 111.674L165.897 106.842L167.116 111.674L169.941 113.007L167.116 114.34L165.897 119.172L164.677 114.34L161.852 113.007L164.677 111.674Z"
          fill="#93BE94"
        />
      </svg>
      <div className="bg-white px-8 pt-4 pb-10 rounded-b-small">
        <h3 className="font-display font-bold text-primary-blue mb-2">
          Digital Project Funding
        </h3>
        <p className="text-xs mb-6 text-gray-700">
          This solution is about this and this and that and it offers this and
          that. The pros and cons are stated as this and that.
        </p>
        <GhostBlueCTA>Learn More</GhostBlueCTA>
      </div>
    </div>
    <div className="flex flex-col shadow-xl">
      <svg viewBox="0 0 243 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="243" height="136.459" fill="#678A68" />
        <path
          d="M170.139 71.2217L168.619 69.1498C166.948 66.8758 166.923 63.7932 168.569 61.4938L170.063 59.3967C172.341 56.1877 171.278 51.6902 167.809 49.8204L165.53 48.6076C163.049 47.2684 161.682 44.5143 162.163 41.7349L162.593 39.1829C163.252 35.2918 160.34 31.7038 156.39 31.5522L153.807 31.4512C150.997 31.3248 148.566 29.4298 147.781 26.7262L147.072 24.25C145.984 20.4599 141.806 18.4891 138.16 20.0557L135.78 21.0663C133.197 22.1781 130.184 21.5212 128.285 19.424L126.563 17.5037C123.93 14.5727 119.297 14.5979 116.714 17.5795L115.018 19.5251C113.169 21.6475 110.156 22.355 107.548 21.2938L105.168 20.3083C101.522 18.7923 97.3698 20.8389 96.3317 24.629L95.6481 27.1052C94.9138 29.8088 92.5084 31.7544 89.6979 31.9312L87.1153 32.0828C83.1654 32.3102 80.3043 35.9487 81.0386 39.8146L81.4943 42.3413C82.0007 45.1207 80.6841 47.9001 78.2281 49.2645L75.9746 50.5279C72.5058 52.4482 71.5184 56.9458 73.8478 60.1294L75.367 62.2013C77.0381 64.4754 77.0634 67.558 75.4176 69.8573L73.9237 71.9545C71.645 75.1634 72.7084 79.6609 76.1772 81.5307L78.456 82.7435C80.9373 84.0827 82.3046 86.8368 81.8235 89.6162L81.3931 92.1682C80.7347 96.0594 83.6465 99.6473 87.5964 99.7989L90.179 99.9C92.9895 100.026 95.4202 101.921 96.2051 104.625L96.914 107.101C98.0028 110.891 102.181 112.862 105.827 111.295L108.207 110.285C110.789 109.173 113.802 109.83 115.701 111.927L117.423 113.847C120.056 116.778 124.69 116.753 127.272 113.772L128.969 111.826C130.817 109.704 133.83 108.996 136.438 110.057L138.818 111.043C142.464 112.559 146.617 110.512 147.655 106.722L148.338 104.246C149.073 101.542 151.478 99.5968 154.288 99.4199L156.871 99.2683C160.821 99.0409 163.682 95.4024 162.948 91.5365L162.492 89.0098C161.986 86.2304 163.302 83.451 165.758 82.0866L168.012 80.8232C171.481 78.9282 172.468 74.4054 170.139 71.2217ZM121.955 98.5103C103.801 98.5103 89.0396 83.7795 89.0396 65.6629C89.0396 47.5464 103.801 32.8156 121.955 32.8156C140.109 32.8156 154.871 47.5464 154.871 65.6629C154.871 83.7795 140.109 98.5103 121.955 98.5103Z"
          fill="#789F79"
        />
        <path
          d="M123.282 82.2645V77.9025C126.479 77.5247 128.948 75.227 128.948 72.4492C128.948 69.6738 126.479 67.3774 123.282 66.9996V59.6861C125.461 60.0175 127.11 61.5024 127.11 63.2799C127.11 63.7906 127.521 64.204 128.029 64.204C128.537 64.204 128.948 63.7906 128.948 63.2799C128.948 60.5021 126.478 58.2037 123.282 57.8279V53.4646C123.282 52.9539 122.871 52.5405 122.363 52.5405C121.855 52.5405 121.444 52.9539 121.444 53.4646V57.8285C118.245 58.2044 115.772 60.5027 115.772 63.2812C115.772 66.0565 118.245 68.3523 121.444 68.7282V76.0461C119.262 75.7161 117.61 74.2298 117.61 72.4498C117.61 71.9391 117.199 71.5258 116.691 71.5258C116.183 71.5258 115.772 71.9391 115.772 72.4498C115.772 75.2302 118.245 77.5298 121.444 77.9044V82.2652C121.444 82.7758 121.855 83.1892 122.363 83.1892C122.871 83.1892 123.282 82.7752 123.282 82.2645ZM127.11 72.4492C127.11 74.2267 125.462 75.7116 123.282 76.0442V68.8579C125.462 69.1905 127.11 70.6736 127.11 72.4492ZM117.61 63.2806C117.61 61.5024 119.262 60.0175 121.444 59.6868V66.8693C119.262 66.5386 117.61 65.0562 117.61 63.2806Z"
          fill="#A2C7A3"
        />
        <path
          d="M141.392 68.229C141.392 57.566 132.69 48.8918 121.994 48.8918C111.297 48.8918 102.595 57.566 102.595 68.229C102.595 78.8921 111.297 87.5675 121.994 87.5675C132.69 87.5675 141.392 78.8921 141.392 68.229ZM104.43 68.229C104.43 58.5752 112.309 50.7215 121.994 50.7215C131.678 50.7215 139.557 58.5752 139.557 68.229C139.557 77.8835 131.678 85.7379 121.994 85.7379C112.309 85.7379 104.43 77.8841 104.43 68.229Z"
          fill="#789F79"
        />
        <path
          d="M83.9189 68.5945C37.2162 65.0918 8.51351 89.027 0 101.432V136.459H20.7973C37.4351 92.0918 69.8108 82.4594 83.9189 83.1891V68.5945Z"
          fill="#0C142F"
        />
        <path
          d="M91.2489 65.8013C88.6871 67.5879 86.5217 71.0122 85.7593 72.501V83.5541C87.1317 81.7675 91.2489 82.6671 97.196 83.5541C102.02 84.2736 104.363 81.2851 104.973 79.6474C103.545 78.9966 106.746 75.9315 104.973 71.6077C103.907 69.0075 97.4708 66.5222 97.196 62.2281C96.464 50.7939 92.9263 51.8063 91.2489 53.7418C92.3163 57.0172 93.8107 64.0147 91.2489 65.8013Z"
          fill="#D3B475"
        />
        <path
          d="M159.081 68.5944C205.784 72.0971 234.486 48.162 243 35.7566L243 0.729561L222.203 0.729559C205.565 45.0971 173.189 54.7296 159.081 53.9998L159.081 68.5944Z"
          fill="#E88D17"
        />
        <path
          d="M132.978 30.0609C130.416 32.2501 132.978 41.0068 134.076 45.7501C135.418 50.6149 140.297 57.5245 138.102 47.2095C135.54 35.169 134.367 28.8736 132.978 30.0609Z"
          fill="#C49C50"
        />
        <path
          d="M139.906 31.0538C136.886 32.5551 137.232 41.6702 137.139 46.5372C137.252 51.5814 140.296 59.4674 140.687 48.9301C141.143 36.63 141.544 30.2395 139.906 31.0538Z"
          fill="#C19846"
        />
        <path
          d="M130.127 36.4982C136.483 50.4973 151.022 54.2887 157.496 54.4346V67.9962C156.466 66.538 152.729 64.1465 146.019 66.2463C137.631 68.8712 132.775 67.5587 128.802 66.2463C125.624 65.1964 127.184 63.4757 128.361 62.7465C140.721 69.7461 146.901 52.092 134.982 54.4346C125.447 56.3087 125.712 59.8818 127.036 61.4341C126.889 63.4757 125.889 66.3338 123.063 61.4341C120.238 56.5344 126.595 49.4765 130.127 46.5601C124.921 41.3611 122.181 18.9993 130.127 36.4982Z"
          fill="#D3B475"
        />
        <path
          d="M96.1455 67.9858C96.8624 65.9027 103.912 65.0927 107.347 64.948C110.035 64.7492 111.379 77.967 111.379 80.1368C111.379 82.3066 103.762 84.0425 98.8338 82.7406C93.9053 81.4387 95.2494 70.5896 96.1455 67.9858Z"
          fill="#E8D2A7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M67.2825 30.8652L68.9222 30.221L67.2825 29.5768L66.3602 26.1948L65.4378 29.5768L63.7981 30.221L65.4378 30.8652L66.3602 34.2471L67.2825 30.8652ZM74.5692 24.4214L73.6803 21.1621L72.7915 24.4214L71.1183 25.1883L72.7915 25.9552L73.6803 29.2144L74.5692 25.9552L76.2424 25.1883L74.5692 24.4214ZM73.1052 36.4999L72.2163 33.2406L71.3274 36.4999L69.6542 37.2667L71.3274 38.0336L72.2163 41.2929L73.1052 38.0336L74.7784 37.2667L73.1052 36.4999ZM67.7945 28.6976L66.3602 23.1752L64.9258 28.6976L61.6021 30.221L64.9258 31.7444L66.3602 37.2667L67.7945 31.7444L71.1183 30.221L67.7945 28.6976Z"
          fill="#93BE94"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M165.113 113.571L163.719 113.007L165.113 112.444L165.897 109.485L166.681 112.444L168.074 113.007L166.681 113.571L165.897 116.53L165.113 113.571ZM158.919 107.933L159.674 105.081L160.43 107.933L161.852 108.604L160.43 109.275L159.674 112.127L158.919 109.275L157.497 108.604L158.919 107.933ZM164.677 111.674L165.897 106.842L167.116 111.674L169.941 113.007L167.116 114.34L165.897 119.172L164.677 114.34L161.852 113.007L164.677 111.674Z"
          fill="#93BE94"
        />
      </svg>
      <div className="bg-white px-8 pt-4 pb-10 rounded-b-small">
        <h3 className="font-display font-bold text-primary-blue mb-2">
          Digital Project Funding
        </h3>
        <p className="text-xs mb-6 text-gray-700">
          This solution is about this and this and that and it offers this and
          that. The pros and cons are stated as this and that.
        </p>
        <GhostBlueCTA>Learn More</GhostBlueCTA>
      </div>
    </div>
    <svg
      viewBox="0 0 320 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0"
    >
      <path
        d="M143.681 73.603C-40.9224 -80.862 -196.278 46.7257 -249 104.901V166H406V104.901C380.779 116.937 305.164 208.723 143.681 73.603Z"
        fill="#2F8BCB"
      />
    </svg>
  </CraftIndex>
)
