import * as React from "react";
import pageStyles from "../styles/style.js";
import Header from "../components/links/links.js";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo.js";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  moi,
  image,
  getToKnowStyle,
  gif,
  summaryText,
  pageTitle,
  introduction,
  paint1,
  socialButttons,
  paintName,
} from "../styles/index.module.css";
import denzan from "../lib/denzan.gif";
import Line from "../components/layout/line/Line.js";
import github from "../lib/social/github.png";
import linkedin from "../lib/social/linkedin.png";
import youtube from "../lib/social/youtube.png";
import medium from "../lib/social/medium.png";

const getToKnows = [
  {
    text: "@Trendyol",
    url: "https://www.trendyol.com/",
    description: "💻  Data Warehouse Analyst",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <div className={moi}>
        <ul className={getToKnowStyle}>
          <h1 className={pageTitle}>
            hej! <span style={{}}>denizhan</span> here.
          </h1>
          {getToKnows.map((getToKnow) => (
            <li className={summaryText} key={getToKnow.url}>
              {getToKnow.description}{" "}
              <a
                className={paint1}
                href={getToKnow.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getToKnow.text}
              </a>
            </li>
          ))}
          <div className={introduction}>
            <p>
              I'm all about the data and web development! It's not just a hobby;
              it's my jam. Whether I'm diving into databases or coding up a
              storm, I'm in my element when it comes to making things happen
              online.
            </p>
          </div>
        </ul>
        <span className={image}>
          <img className={gif} src={denzan} alt="moi" />
        </span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/yilmazdenizhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={socialButttons}
            src={linkedin}
            alt="yilmazdenizhan"
          ></img>
        </a>
        <a
          href="https://github.com/deenizhan/deenizhanme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={socialButttons} src={github} alt="deenizhanme"></img>
        </a>
        <a
          href="https://www.youtube.com/@denizhanyilmaz4433"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={socialButttons}
            src={youtube}
            alt="@denizhanyilmaz4433"
          ></img>
        </a>
        <a
          href="https://medium.com/@denizhanyilmaz9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={socialButttons}
            src={medium}
            alt="@denizhanyilmaz9"
          ></img>
        </a>
      </div>
      <Line />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="hej!" />;
