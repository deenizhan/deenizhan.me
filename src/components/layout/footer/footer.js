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
        <span className={footerTitle}>
          <a href="mailto: denizhan@denizhany.me">
            denizhan<span style={{ fontWeight: 100 }}>[at]</span>
            denizhany.me 📪
          </a>
        </span>
      </div>
    </>
  )
}

export default Footer
