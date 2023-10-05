import * as React from "react";
import pageStyles from "../styles/style.js";
import Header from "../components/links/links.js";
import Layout from "../components/layout/layout.js";
import Seo from "../components/seo/seo.js";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const welcomer = () => {
  return (
    <Layout pageTitle="hello">
      <Header />
    </Layout>
  );
};

export default welcomer;
export const Head = () => <Seo title="me in a nutshell" />;
