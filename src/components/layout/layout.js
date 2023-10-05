import * as React from "react";
import { Link } from "gatsby";
import { container, nav, navLinkItem } from "./layout.module.css";
import Header from "./header/header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <div className={container}>
        <main>
          <hr></hr>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
