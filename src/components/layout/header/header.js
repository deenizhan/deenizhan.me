import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  header,
  title,
  navigator,
  seperator,
  tooltip,
  tooltiptext,
} from "../layout.module.css"

const Header = () => {
  return (
    <div className={header}>
      <span className={title}>
        <Link to="/">deenizhan.me</Link>
      </span>
      <span className={navigator}>
        <Link to="/moi">moi</Link>
        <span className={seperator}>/</span>
        <Link to="/journey">journey</Link>
        <span className={seperator}>/</span>
        <span className={tooltip}>
          <span className={tooltiptext}>soon.</span>
          <Link to="javascript:void(0)">projects</Link>
        </span>
        <span className={seperator}>/</span>
        <span className={tooltip}>
          <span className={tooltiptext}>soon.</span>
          <Link to="javascript:void(0)">blog</Link>
        </span>
      </span>
    </div>
  )
}

export default Header
