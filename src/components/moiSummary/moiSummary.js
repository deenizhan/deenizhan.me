import React from "react"
import { tooltip, tooltiptext } from "../../styles/moiSummary.module.css"
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
    year: "2010, 2019",
  },
  {
    flag: "🇧🇬",
    country: "Bulgaria",
    year: "2012,2014",
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

const MoiCard = () => {
  return (
    <>
      <h1>moi.</h1>
      <ul>
        <li>
          <p>
            <b>📍 Currently in:</b> Ankara / Turkiye
          </p>
        </li>
        <li>
          <p>
            <b>🐶 Living with:</b> Cooper the Frenchie
          </p>
        </li>
        <li>
          <p>
            📍
            <b>
              Countries visited:{" "}
              {countries.map(country => (
                <span className={tooltip}>
                  <span className={tooltiptext}>
                    {country.country}-{country.year}
                  </span>
                  <Link to="javascript:void(0)">{country.flag}</Link>
                </span>
              ))}
            </b>
          </p>
        </li>
      </ul>
    </>
  )
}

export default MoiCard
