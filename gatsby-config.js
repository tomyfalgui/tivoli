/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Lato:n4,n7", "Titillium+Web:n4,n6,n7"],
          urls: [
            "https://fonts.googleapis.com/css?family=Lato:400,700&display=swap",
            "https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700&display=swap",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // https://www.gatsbyjs.org/docs/deploying-to-s3-cloudfront/
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "tivoli-static",
        protocol: "https",
        hostname: "tivolisolutions.ph",
      },
    },
  ],
}
