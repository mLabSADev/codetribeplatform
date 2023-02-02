import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCt1gt-w4rJiF7Kq19Bv1IsCb0aFbIrSFw",
          authDomain: "codetribe-platform.firebaseapp.com",
          projectId: "codetribe-platform",
          storageBucket: "codetribe-platform.appspot.com",
          messagingSenderId: "30492894528",
          appId: "1:30492894528:web:852755fe0b6f2a82ed86a5",
          measurementId: "G-TNHN819TJ8"
        }
      }
    }],
}

export default config
