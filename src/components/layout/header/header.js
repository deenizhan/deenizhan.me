import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  header,
  title,
  navigator,
  seperator,
} from "../layout.module.css";

const Header = () => {
  return (
    <div className={header}>
      <span className={title}>
        <Link to="/">deenizhan.me</Link>
      </span>
      <span className={navigator}>
        <Link to="/">projects</Link>
        <span className={seperator}>/</span>
        <Link to="/me">journey</Link>
        <span className={seperator}>/</span>
        <Link to="/blog">stack</Link>
      </span>
    </div>
  );
};

export default Header;
