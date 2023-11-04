import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import { moi } from "../styles/moi.module.css"
import MoiCard from "../components/moiCard/moiCard.js"
import Quote from "../components/quote"
import Line from "../components/layout/line/Line.js"

const Moi = () => {
  return (
    <Layout>
      <div className={moi}>
        <MoiCard />
      </div>
      {/* <Line />
      <Quote /> */}
    </Layout>
  )
}

export default Moi
export const Head = () => <Seo title="moi." />
