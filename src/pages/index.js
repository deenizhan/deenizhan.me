import * as React from "react";
import pageStyles from "../styles/style.js";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page 2">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="denden is changed"
        src="https://dateideas.ai/_next/image?url=%2Fshowcase%2Ftemp1.webp&w=750&q=75"
      />
    </Layout>

    // <main style={pageStyles.pageStyles}>
    //   <h1 style={pageStyles.headingStyles}>
    //     Congratulations
    //     <br />
    //     <span style={pageStyles.headingAccentStyles}>
    //       — you just made a Gatsby site! 🎉🎉🎉
    //     </span>
    //   </h1>
    //   <p style={pageStyles.paragraphStyles}>
    //     Edit <code style={pageStyles.codeStyles}>src/pages/index.js</code> to
    //     see this page update in real-time. 😎
    //   </p>
    //   <ul style={pageStyles.listStyles}>
    //     <li style={pageStyles.docLinkStyle}>
    //       <a
    //         style={pageStyles.linkStyle}
    //         href={`${pageStyles.docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
    //       >
    //         {pageStyles.docLink.text}
    //       </a>
    //     </li>
    //     {links.map((link) => (
    //       <li
    //         key={link.url}
    //         style={{ ...pageStyles.listItemStyles, color: link.color }}
    //       >
    //         <span>
    //           <a
    //             style={pageStyles.linkStyle}
    //             href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
    //           >
    //             {link.text}
    //           </a>
    //           {link.badge && (
    //             <span style={pageStyles.badgeStyle} aria-label="New Badge">
    //               NEW!
    //             </span>
    //           )}
    //           <p style={pageStyles.descriptionStyle}>{link.description}</p>
    //         </span>
    //       </li>
    //     ))}
    //   </ul>
    //   <img
    //     alt="Gatsby G Logo"
    //     src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
    //   />
    //   <Link to="me">me</Link>

    // </main>
  );
};

export default IndexPage;

export const Head = () => <title>deenizhan</title>;
