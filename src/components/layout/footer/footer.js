import React from "react"
import { Link } from "gatsby"
import Line from "../line/Line.js"
import { footer, footerTitle, email } from "../layout.module.css"

const Footer = () => {
  return (
    <>
      <Line />
      <div className={footer}>
        <span className={footerTitle}>© Denizhan Yilmaz</span>
        <span className={email}>
          <a href="mailto: denizhanyilmaz9@gmail.com">
            denizhanyilmaz9<span style={{ fontWeight: 800 }}>[at]</span>
            gmail.com
          </a>
        </span>
      </div>
    </>
  )
}

export default Footer
