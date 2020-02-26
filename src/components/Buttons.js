import { Link } from "gatsby"

import styled from "styled-components"

import tw from "tailwind.macro"

const BaseButton = styled(Link)`
  ${tw`w-full py-2 text-primary-blue text-sm bg-white border-white border border-solid rounded-large font-bold flex justify-center`};
`

export const PrimaryCTA = styled(BaseButton)`
  ${tw`mb-4`};
`
export const GhostCTA = styled(BaseButton)`
  ${tw`bg-transparent text-white`};
`
