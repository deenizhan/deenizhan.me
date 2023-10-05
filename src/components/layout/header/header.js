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
    <div className={container}>
      <div>
        <Link to="/" className={title}>
          deenizhan.me
        </Link>
      </div>
      <div>
        <Link to="/" className={navigator}>
          projects
        </Link>
        <span className={seperator}>/</span>
        <Link to="/me" className={navigator}>
          journey
        </Link>
        <span className={seperator}>/</span>
        <Link to="/blog" className={navigator}>
          stack
        </Link>
      </div>
    </div>
  );
};

export default Header;
