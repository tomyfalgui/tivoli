import React from "react"
import Layout from "../components/Layout"
import HeroAbout from "../components/about/HeroAbout"
import CapableAbout from "../components/about/CapableAbout"
import MilestonesAbout from "../components/about/MilestonesAbout"
import PeopleAbout from "../components/about/PeopleAbout"

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
