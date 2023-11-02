import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import { journey } from "../styles/journeyCard.module.css"
import StackCard from "../components/stackCard/stackCard"
const Stack = () => {
  return (
    <Layout>
      <div className={journey}>
        <StackCard />
      </div>
    </Layout>
  )
}

export default Stack
export const Head = () => <Seo title="stack." />
