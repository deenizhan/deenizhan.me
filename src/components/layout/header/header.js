import * as React from "react";
import { Link } from "gatsby";
import { container, nav, navLinkItem } from "../layout.module.css";

const Header = () => {
  return (
    <div className={container}>
      <span>deenizhan.me</span>
      <span className={nav}>
        <Link className={navLinkItem} to="/">
          Home
        </Link>
        <span>/</span>
        <Link className={navLinkItem} to="/me">
          me
        </Link>
        <span>/</span>
        <Link className={navLinkItem} to="/blog">
          blog
        </Link>
      </span>
    </div>
  );
};

export default Header;
