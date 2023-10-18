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
        <span className={tooltip}>
          <Link to="javascript:void(0)">moi</Link>
          <span className={tooltiptext}>soon.</span>
          <span className={seperator}>/</span>
        </span>
        <span className={tooltip}>
          <Link to="javascript:void(0)">journey</Link>
          <span className={tooltiptext}>soon.</span>
          <span className={seperator}>/</span>
        </span>
        <span className={tooltip}>
          <Link to="javascript:void(0)">projects</Link>
          <span className={tooltiptext}>soon.</span>
          <span className={seperator}>/</span>
        </span>
        <span className={tooltip}>
          <Link to="javascript:void(0)">blog</Link>
          <span className={tooltiptext}>soon.</span>
        </span>
      </span>
    </div>
  )
}

export default Header
