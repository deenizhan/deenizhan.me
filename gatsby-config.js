module.exports = {
  siteMetadata: {
    title: `deenizhan`,
    description: `lives in a nutshell`,
    author: `@deenizhan`,
    siteUrl: `ttps://www.yourdomain.tld`,
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
