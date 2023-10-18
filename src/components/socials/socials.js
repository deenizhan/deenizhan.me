import * as React from "react"
import {
  socialButtton,
  socialButttons,
  tooltip,
  tooltiptext,
} from "../../styles/index.module.css"
import github from "../../lib/social/github.svg"
import linkedin from "../../lib/social/linkedin.svg"
import youtube from "../../lib/social/youtube.svg"
import medium from "../../lib/social/medium.svg"

const Socials = () => {
  return (
    <div className={socialButttons}>
      <a
        href="https://www.linkedin.com/in/yilmazdenizhan/"
        target="_blank"
        rel="noopener noreferrer"
        className={socialButtton}
      >
        <img src={linkedin} alt="yilmazdenizhan"></img>
      </a>
      <a
        href="https://github.com/deenizhan/deenizhanme"
        target="_blank"
        rel="noopener noreferrer"
        className={socialButtton}
      >
        <img src={github} alt="deenizhanme"></img>
      </a>
      <a
        href="https://www.youtube.com/@denizhanyilmaz4433"
        target="_blank"
        rel="noopener noreferrer"
        className={socialButtton}
      >
        <img src={youtube} alt="@denizhanyilmaz4433"></img>
      </a>
      <a
        href="javascript:void(0)"
        // target="_blank"
        // rel="noopener noreferrer"
        className={socialButtton}
      >
        <span className={tooltip}>
          <img src={medium} alt="@denizhanyilmaz9"></img>
          <span className={tooltiptext}>soon.</span>
        </span>
      </a>
    </div>
  )
}

export default Socials
