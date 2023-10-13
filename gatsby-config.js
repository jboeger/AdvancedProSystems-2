const siteUrl = process.env.url || "https://www.advancedprosystems.com";

const pages = [
  {
    path: "/",
    lastmod: "2023-09-19" //format YYYY-MM-DD
  },
  {
    path: "/about/",
    lastmod: "2023-09-19"
  },
  {
    path: "/contact/",
    lastmod: "2023-09-19"
  },
  {
    path: "/products/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/",
    lastmod: "2023-09-19",
  },
  {
    path: "/services/calibrations/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/electrical-calibration/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/flow-sensor-calibrations/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/iq-oq-pq-validation/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/lab-calibrations/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/pipette-calibration/",
    lastmod: "2023-09-19"
  },
  {
    path: "/services/temperature-calibration/",
    lastmod: "2023-09-19"
  },
]

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.advancedprosystems.com",
    title: "AdvancedProSystems",
  },
  plugins: [
    "react",
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-SQYSL9EPEQ`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        resolveSiteUrl: () => siteUrl,
        resolvePages: () => pages,
        serialize: ({path, lastmod}) => ({url: path, lastmod: lastmod})
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png"
      }
    }
  ],
  pathPrefix: "/AdvancedProSystems",
};
