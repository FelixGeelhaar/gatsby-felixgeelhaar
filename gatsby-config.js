module.exports = {
  siteMetadata: {
    title: "My Blog",
    author: "Felix Geelhaar",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://felixgeelhaar.blog",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/felixgeelhaar",
      },
      {
        name: "github",
        url: "https://github.com/felixgeelhaar",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Geelhaar`,
        short_name: `Felix Geelhaar`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `content/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
