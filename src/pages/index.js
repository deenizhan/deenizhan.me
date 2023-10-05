import * as React from "react";
import pageStyles from "../styles/style.js";
import Header from "../components/links/links.js";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo.js";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  return (
    <Layout pageTitle="hej! denizhan here.">
      <StaticImage
        alt="denden is changed"
        src="https://dateideas.ai/_next/image?url=%2Fshowcase%2Ftemp1.webp&w=750&q=75"
      />
      {/* <Header /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="" />;
