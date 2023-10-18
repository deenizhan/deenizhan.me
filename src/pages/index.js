import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo.js"
import pageStyles from "../styles/style.js"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import {
  moi,
  image,
  getToKnowStyle,
  gif,
  summaryText,
  pageTitle,
  introduction,
  paint1,
} from "../styles/index.module.css"
import denzan from "../lib/denzan.gif"
import Line from "../components/layout/line/Line.js"
import Socials from "../components/socials/socials.js"

const getToKnows = [
  {
    text: "@Trendyol",
    url: "https://www.trendyol.com/",
    description: "💻  Data Warehouse Analyst",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <div className={moi}>
        <ul className={getToKnowStyle}>
          <h1 className={pageTitle}>
            <span style={{ fontWeight: 800 }}>hej!</span> denizhan here.
          </h1>
          {getToKnows.map(getToKnow => (
            <li className={summaryText} key={getToKnow.url}>
              {getToKnow.description}{" "}
              <a
                className={paint1}
                href={getToKnow.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getToKnow.text}
              </a>
            </li>
          ))}
          <div className={introduction}>
            <p>
              I'm all about the data and web development! It's not just a hobby;
              it's my jam. Whether I'm diving into databases or coding up a
              storm, I'm in my element when it comes to making things happen
              online.
            </p>
          </div>
        </ul>
        <span className={image}>
          <img className={gif} src={denzan} alt="moi" />
        </span>
      </div>
      <Socials />
      <Line />
      coming soooon.
    </Layout>
  )
}

export default IndexPage
export const Head = () => <Seo title="hej!" />
