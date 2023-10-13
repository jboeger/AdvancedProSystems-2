import React from "react";
import { metaData } from "../pages/metaData";
import icon from "images/favicon.ico";

export const Head = ({location, params, data, pageContext }) => {
  const path = location.pathname;
  const meta = metaData[path];

  return (
    <>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonicalUrl} />
      <link rel="icon" type="image/png" href={icon} />

      <meta property="og:site_name" content="Advanced Process Systems, Inc." />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.canonicalUrl} />

      <meta propery="og:image" content={meta.imgUrl} />
      <meta property="og:image:alt" content={meta.imgAlt} />
      { meta.imgWidth ? 
        <meta property="og:image:width" content={meta.imgWidth} /> : null
      }
      { meta.imgHeight ? 
        <meta property="og:image:height" content={meta.imgHeight} /> : null
      }
      { meta.imgHeight ? 
        <meta property="og:image:type" content={meta.imgType} /> : null
      }
    </>
  )
}