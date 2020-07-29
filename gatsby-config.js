module.exports = {
  siteMetadata: {
    title: `Rowan Tran`,
    description: `The portfolio site of full-stack developer Rowan Tran.`,
    author: `Rowan Tran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rowan Tran`,
        short_name: `RTran`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        useResolveUrlLoader: true,
      },
    },
    `gatsby-transformer-json`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `data`,
            path: `${__dirname}/src/data/`
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images/`
        }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
