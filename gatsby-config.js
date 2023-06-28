const siteUrl = process.env.url || "https://www.advancedprosystems.com";

const pages = [
  {
    path: "/",
    lastmod: "2023-01-01" //format YYYY-MM-DD
  },
  {
    path: "/about/",
    lastmod: "2023-01-01"
  },
  {
    path: "/contact/",
    lastmod: "2023-01-01"
  },
  {
    path: "/products/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/",
    lastmod: "2023-01-01",
  },
  {
    path: "/services/calibrations/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/electrical-calibrations/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/flow-sensor-calibrations/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/iq-oq-pq-validation/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/lab-calibrations/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/pipette-calibration/",
    lastmod: "2023-01-01"
  },
  {
    path: "/services/temperature-calibration/",
    lastmod: "2023-01-01"
  },
]

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.advancedprosystems.com",
    title: "AdvancedProSystems",
  },
  plugins: [
    "react",
    "gatsby-plugin-react-helmet",
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
    }
  ],
  pathPrefix: "/AdvancedProSystems",
};
