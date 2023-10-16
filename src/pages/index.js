import * as React from "react";
import pageStyles from "../styles/style.js";
import Header from "../components/links/links.js";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo.js";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const experiences = [
  {
    text: "Trendyol",
    url: "https://www.trendyol.com/",
    description: "Data Warehouse Analyst",
    color: "#E95800",
  },
  {
    text: "Getir",
    url: "https://www.getir.com/",
    description: "Data Analyst",
    color: "#E95800",
  },
];

const IndexPage = () => {
  return (
    <Layout pageTitle="hej! denizhan here.">
      <ul>
        {experiences.map((experience) => (
          <li key={experience.url}>{experience.description}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="" />;
