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
          <h1 className={pageTitle}>hej! denizhan here.</h1>
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
          <img className={gif} src={denzan} />
        </span>
      </div>
      <div>
        <a>
          <img className={socialButttons} src={linkedin}></img>
        </a>
        <a>
          <img className={socialButttons} src={github}></img>
        </a>
        <a>
          <img className={socialButttons} src={youtube}></img>
        </a>
        <a>
          <img className={socialButttons} src={medium}></img>
        </a>
      </div>
      <Line />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="hej!" />;
