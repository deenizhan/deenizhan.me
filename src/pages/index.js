import * as React from "react";
import pageStyles from "../styles/style.js";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/links/links.js";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo/seo.js";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page 2">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="denden is changed"
        src="https://dateideas.ai/_next/image?url=%2Fshowcase%2Ftemp1.webp&w=750&q=75"
      />
      <Header />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
