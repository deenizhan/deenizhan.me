import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import { moi } from "../styles/moi.module.css"
import MoiCard from "../components/moiCard/moiCard.js"

const Moi = () => {
  return (
    <Layout>
      <div className={moi}>
        <MoiCard />
      </div>
    </Layout>
  )
}

export default Moi
export const Head = () => <Seo title="moi" />
