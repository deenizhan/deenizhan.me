import React from "react";
import { Link } from "gatsby";
import Line from "../line/Line.js";
import { footer, footerTitle, email } from "../layout.module.css";

const Footer = () => {
  return (
    <>
      <Line />
      <div className={footer}>
        <span className={footerTitle}>© Denizhan Yilmaz</span>
        <span className={email}>
          denizhanyilmaz9 <b>[at]</b> gmail.com
        </span>
      </div>
    </>
  );
};

export default Footer;
