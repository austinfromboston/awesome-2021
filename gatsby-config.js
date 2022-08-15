require(`dotenv`).config();
const linkResolver = require("./src/utils/link_resolver");

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Awesome`,
    siteTitleAlt: `It's Going to be Awesome`,
    siteDescription: `a party in the forest`,
    siteUrl: "https://itsgoingtobefuckingawesome.com",
    siteAuthor: "team awesome",
    siteHeadline: "awesome 2021",
    siteLanguage: "en-US",
    siteImage: "https://itsgoingtobefuckingawesome.com/banner.jpg",
    // icon: "https://itsgoingtobefuckingawesome.com/hipstercorn.jpg",
    author: "team awesome",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        // Be sure to setup gatsby-source-prismic alongside gatsby-plugin-prismic-previews.
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver,
        webhookSecret: process.env.PRISMIC_WEBHOOK_SECRET,
        schemas: {
          //   bring_list: require('./src/schemas/bring_list.json'),
          //   faq_section: require('./src/schemas/faq_section.json'),
          faq: require("./src/schemas/faq_fake.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        // The name of your Prismic repository. This is required.
        // Example: 'your-repository-name' if your prismic.io address
        // is 'your-repository-name.prismic.io'.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,

        // An API access token to your Prismic repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        //
        // If you choose to keep your access token private, do not provide this
        // plugin option. Editors will be prompted to enter an access token
        // during a preview session instead, if required.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,

        // Determines the type of Prismic Toolbar that is added to your site.
        // This defaults to "new". See the "Prismic Toolbar" section of the
        // plugin documentation for more details.
        //
        // Note: The toolbar is required for previews to function and cannot be
        // disabled.
        toolbar: "new",
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Event`,
        short_name: `Awesome`,
        description: `Party - Redwoods - Costumes`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/hipstercorn.png`,
            sizes: `400x400`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    /*
    {
      resolve: "gatsby-theme-cloudinary-gallery",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 22,
      },
    },
    */
    // This plugin provides support for automatically optimized images sourced
    // from your Prismic repository.
    "gatsby-plugin-image",
  ].filter(Boolean),
};
