import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/index/Hero"
import Solutions from "../components/index/SolutionsIndex"
import Craft from "../components/index/CraftIndex"
import Testimonials from "../components/index/TestimonialsIndex"

export default () => {
  return (
    <Layout>
      <Hero />
      <Solutions />
      <Craft />
      <Testimonials />
    </Layout>
  )
}
