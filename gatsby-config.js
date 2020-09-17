/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://teenranch.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teen Ranch Canada`,
        short_name: `Teen Ranch`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#002146`,
        display: `standalone`,
        icon: 'favicon.png'
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://teenranch.com`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `teenranch.com`,
        customDomain: 'stats.teenranch.com'
      },
    },
  ],
}
