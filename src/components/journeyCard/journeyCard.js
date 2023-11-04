import React from "react"
import {
  tooltip,
  tooltiptext,
  journey,
  journeyInfo,
  titleDivider,
  experienceLine,
} from "../../styles/journeyCard.module.css"
import { paint1, paint2, paint3, paint4 } from "./../../styles/index.module.css"
import { Link } from "gatsby"

const pastXp = [
  {
    text: " Getir",
    position: "Data Analyst at",
    url: "https://www.getir.com/",
    emoji: "🛵",
    term: "April'22 - April'23",
    color: paint2,
  },
  {
    text: " Getir",
    position: "Supply Chain Analysis Intern at",
    url: "https://www.getir.com/",
    emoji: "🛵",
    term: "December'21 - March'22",
    color: paint2,
  },
  {
    text: " Middle East Technical University",
    position: "Graduated from B.S. Industrial Engineering ",
    url: "https://www.metu.edu.tr/",
    emoji: "🎓",
    term: "July'22",
    color: paint3,
  },
  {
    text: " AIESEC",
    position: "Attended a volunteering project in Shanghai | China with ",
    url: "https://www.aiesec.org/",
    emoji: "🥟",
    term: "July'18",
    color: paint4,
  },
]

const JourneyCard = () => {
  return (
    <>
      <div className={journey}>
        <h1>journey.</h1>
        <h3 className={titleDivider}>Current</h3>
        <ul>
          <li>
            <span>
              💻 Data Warehouse Analyst at{" "}
              <a
                className={paint1}
                href="https://www.trendyol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trendyol
              </a>
            </span>
            <span
              style={{
                fontWeight: 100,
                color: "grey",
                fontSize: "small",
                margin: "10px",
              }}
            >
              (April'23 - Present)
            </span>
          </li>
        </ul>
        <h3>Past</h3>
        <ul>
          {pastXp.map(exp => (
            <li className={experienceLine}>
              <span>
                {exp.emoji} {exp.position}{" "}
                <a
                  className={exp.color}
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.text}
                </a>
              </span>
              <span
                style={{
                  fontWeight: 100,
                  color: "grey",
                  fontSize: "small",
                  margin: "10px",
                }}
              >
                ({exp.term})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default JourneyCard
