import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"
import Skills from "../components/Skills"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Projects heading="My Portfolio" />
    <Skills />
  </Layout>
)

export default IndexPage
