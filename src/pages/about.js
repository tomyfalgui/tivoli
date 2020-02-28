import React from "react"
import Layout from "../components/Layout"
import HeroAbout from "../components/HeroAbout"
import CapableAbout from "../components/CapableAbout"
import MilestonesAbout from "../components/MilestonesAbout"
import TeamAbout from "../components/TeamAbout"

export default () => {
  return (
    <Layout>
      <HeroAbout />
      <CapableAbout />
      <MilestonesAbout />
      <TeamAbout />
    </Layout>
  )
}
