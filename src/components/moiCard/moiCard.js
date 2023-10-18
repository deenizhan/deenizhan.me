import React from "react"
import {
  tooltip,
  tooltiptext,
  flags,
  colorBlind,
} from "../../styles/moiCard.module.css"
import { Link } from "gatsby"

const countries = [
  {
    flag: "🇧🇦",
    country: "Bosnia and Herzegovina",
    year: "2008",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    year: "2010   2019",
  },
  {
    flag: "🇧🇬",
    country: "Bulgaria",
    year: "2012   2014",
  },
  {
    flag: "🇨🇿",
    country: "Czechia",
    year: "2018",
  },
  {
    flag: "🇭🇺",
    country: "Hungary",
    year: "2018",
  },
  {
    flag: "🇨🇳",
    country: "China",
    year: "2018",
  },
  {
    flag: "🇭🇰",
    country: "Hong Kong",
    year: "2018",
  },
  {
    flag: "🇩🇰",
    country: "Denmark",
    year: "2019",
  },
]

function MouseOver(event) {
  document.body.style.webkitFilter = "grayscale(1)"
}

function MouseOut(event) {
  document.body.style.webkitFilter = "grayscale(0)"
}

const MoiCard = () => {
  return (
    <>
      <h1>moi.</h1>
      <ul>
        <li>
          <p>
            <b>📍 Currently in </b> Ankara / Turkiye.
          </p>
        </li>
        <li>
          <p>
            <b>🐶 Living with </b> Cooper the Frenchie.
          </p>
        </li>
        <li>
          <p>
            🌴
            <b style={{ alignItems: "center" }}>
              {" "}
              Passport stamps{" "}
              {countries.map(country => (
                <span className={tooltip}>
                  <span className={tooltiptext}>
                    <div style={{ fontWeight: 600 }}>{country.country}</div>
                    <div style={{ fontWeight: 100 }}>{country.year}</div>
                  </span>
                  <Link to="javascript:void(0)" className={flags}>
                    {country.flag}
                  </Link>
                </span>
              ))}
            </b>
          </p>
        </li>
        <li>
          <p>
            <b>🎧 Listening to</b> Cooper the Frenchie.
          </p>
        </li>
        <li>
          <p>
            <b>🎧 Idiosyncrasy</b> Colorblindness, Protanopia.{" "}
            <span>
              Sure not like{" "}
              <span
                className={colorBlind}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
              >
                this
              </span>
            </span>
          </p>
        </li>
      </ul>
    </>
  )
}

export default MoiCard
