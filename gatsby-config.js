module.exports = {
  siteMetadata: {
    title: `Wen Ting Wang`,
    description: `Personal website for Ting.`,
    author: `@chubberlisk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wen Ting Wang`,
        short_name: `Ting`,
        description: `Personal website for Ting.`,
        start_url: `/`,
        background_color: `#EAC435`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Amatic SC", "Lato"],
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
