import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Solutions from "../components/SolutionsIndex"
import Craft from "../components/CraftIndex"
import Testimonials from "../components/TestimonialsIndex"

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
