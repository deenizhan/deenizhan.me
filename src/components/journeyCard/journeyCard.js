import React from "react"
import {
  tooltip,
  tooltiptext,
  journey,
  journeyInfo,
} from "../../styles/journeyCard.module.css"
import { paint1, paint2 } from "./../../styles/index.module.css"
import { Link } from "gatsby"

const pastXp = [
  {
    text: "Getir",
    position: "Data Analyst",
    url: "https://www.getir.com/",
    emoji: "🛵",
    term: "April'22 - April'23",
  },
  {
    text: "Getir",
    position: "Supply Chain",
    url: "https://www.getir.com/",
    emoji: "🛵",
    term: "December'21 - March'22",
  },
]

const JourneyCard = () => {
  return (
    <>
      <div className={journey}>
        <h1>journey.</h1>
        <h3>Current</h3>
        <ul>
          <li>
            <p>
              💻 Data Warehouse Analyst{" "}
              <a
                className={paint1}
                href="https://www.trendyol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Trendyol
              </a>
            </p>
          </li>
        </ul>
        <h3>Past</h3>
        <ul>
          {pastXp.map(exp => (
            <li>
              <p>
                {exp.emoji} {exp.position}{" "}
                <a
                  className={paint2}
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{exp.text}
                </a>
              </p>
              <div
                style={{
                  fontWeight: 100,
                  color: "grey",
                  fontSize: "small",
                  textIndent: "4%",
                  lineHeight: "10%",
                }}
              >
                {exp.term}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default JourneyCard
