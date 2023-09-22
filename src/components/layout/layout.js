import * as React from "react";
import { Link } from "gatsby";
import { container, navLinkItem } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link className={navLinkItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navLinkItem} to="/me">
              me
            </Link>
          </li>
          <li>
            <Link className={navLinkItem} to="/blog">
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
