module.exports = {
  siteMetadata: {
    title: `denizhany`,
    description: `lives in a nutshell`,
    author: `@denizhany`,
    siteUrl: `https://www.deenizhany.me/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/lib/logo/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-mdx",
  ],
}
