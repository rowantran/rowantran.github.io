module.exports = {
  siteMetadata: {
    title: `Rowan-James Tran`,
    description: `The portfolio site of full-stack developer Rowan-James Tran.`,
    author: `Rowan-James Tran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
