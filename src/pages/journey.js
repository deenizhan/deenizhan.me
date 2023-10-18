import * as React from "react"
import Header from "../components/links/links.js"
import Layout from "../components/layout/layout.js"
import Seo from "../components/seo/seo.js"

const welcomer = () => {
  return (
    <Layout pageTitle="hello">
      <Header />
    </Layout>
  )
}

export default welcomer
export const Head = () => <Seo title="me in a nutshell" />
