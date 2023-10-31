import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import { moi } from "../styles/moi.module.css"
import JourneyCard from "../components/journeyCard/journeyCard.js"
import Quote from "../components/quote"
import Line from "../components/layout/line/Line.js"
import {
  tooltip,
  tooltiptext,
  journey,
  journeyInfo,
} from "../styles/journeyCard.module.css"

const Moi = () => {
  return (
    <Layout>
      <div className={journey}>
        <JourneyCard />
      </div>
    </Layout>
  )
}

export default Moi
export const Head = () => <Seo title="moi" />
