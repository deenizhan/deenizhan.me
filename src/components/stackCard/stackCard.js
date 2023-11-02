import React from "react"
import {
  listItem,
  paint1,
  paint2,
  paint3,
  paint4,
  paint5,
  paint6,
  paint7,
} from "../../styles/stackCard.module.css"

const StackCard = () => {
  return (
    <>
      <h1>stack.</h1>
      <ul className={listItem}>
        <li>
          Model development for ongoing analyses with{" "}
          <span className={paint1}>SQL</span> and{" "}
          <span className={paint2}>BI Tools</span>.
        </li>
        <li>
          Working with <span className={paint3}>Agile Scrum</span>.
        </li>
        <li>
          Currently focused on <span className={paint4}>Javascript</span> with{" "}
          <span className={paint5}>React</span> on the frontend.
        </li>
        <li>
          Learning <span className={paint6}>Node.js</span> on the backend with{" "}
          <span className={paint7}>REST</span>.
        </li>
      </ul>
    </>
  )
}

export default StackCard
