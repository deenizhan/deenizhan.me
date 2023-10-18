import * as React from "react"
import { Link } from "gatsby"
import { container, pageTitleFont } from "./layout.module.css"
import Header from "./header/header"
import Line from "./line/Line.js"
import Footer from "./footer/footer.js"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <main className={container}>
        <div>
          <Header />
          <Line />
          <h1 className={pageTitleFont}>{pageTitle}</h1>
          {children}
          coming soon.
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Layout
