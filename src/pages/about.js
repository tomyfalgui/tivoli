import React from "react"
import Layout from "../components/Layout"
import HeroAbout from "../components/HeroAbout"
import CapableAbout from "../components/CapableAbout"
import MilestonesAbout from "../components/MilestonesAbout"
import PeopleAbout from "../components/PeopleAbout"

export default () => {
  return (
    <Layout>
      <HeroAbout />
      <CapableAbout />
      <MilestonesAbout />
      <PeopleAbout />
    </Layout>
  )
}
