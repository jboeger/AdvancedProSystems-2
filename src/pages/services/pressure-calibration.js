
import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import pressure from "images/Pressure.jpg";
import pressuregauges from "images/analog-and-digital-pressure-gauges.jpg";
import pressurecontroller from "images/pressure-controller.jpg";
import pressuretransmitter from "images/pressure-transmitter.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Pressure Gauge Calibration | Sensors + Transmitters",
  description: "TBD",
  canonicalUrl: "https://www.advancedprosystems.com/services/pressure-calibration/",
  img: "",
  imgAlt: "",
}

/**
 * each object (the thing surrounded by {}) in this array is a section.
 * section properties:
 *  img: the image. it is refered to not by the url but by an imported object.
 *  imgAlt: alt for the image 
 *  imgCols: layout thing. the number of columns allocated to the image.
 *    there are a total of 12 columns
 *    for example, if imgCols: "7", the image will take up 7 columns and the text content will take up 5.
 *  content: text content in the form of html
 */

const sections = [
  {
    img: pressure,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Pressure Calibration</h1>
        <p>
           Adanced Process Systems uses calibration of pressure gauges standards in our ISO 17025 compliant pressure gage calibration. At APS, we know how to calibrate a pressure gauge using industry standards of pressure sensor calibration from all manufacturers of pressure calibration equipment due to our understanding of pressure calibration and how to calibrate a pressure gauge. APS provides pressure calibration with our extensive experience in the calibration of pressure gauges. 
        </p>
      <p><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations main page</a>
      </p>
      </div>
    )
  },
    {
    img: pressuregauges,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Digital Pressure Gauge / Indicator Calibration</h2>
        <p>
          Advanced Process Systems provides expert digital pressure gauge calibration service. We have vast experience in digital pressure gauge from all OEM manufacturers.
        </p>
      </div>
    )
  },
  {
    img: pressuregauges,
    imgAlt: "placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Analogue Pressure Guage / Indicator Calibration</h2>
        <p>
          Advanced Process Systems provides expert analog pressure gauge calibration service for your analogue pressure gauge calibration. 
        </p>
      </div>
    )
  },
  {
    img: pressuretransmitter,
    imgAlt: "placeholder.",
    imgCols: "6",
    content: (
      <div>
      <h2>Pressure Transmitter Calibration</h2>
        <p>
          Advanced Process Systems provides an expert pressure transmitter calibration procedure using our ISO 17025 compliant pressure transmitter calibration procedure. We have vast experience in Rosemount pressure transmitter calibration as well as from all other OEM manufacturers.
      </p>
      </div>
    )  
  },
    {
    img: pressure,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Pressure Calibrators</h2>
        <p>
          Advanced Process Systems pressure calibrators use our ISO 17025 compliant pressure calibrators procedure. We have vast experience in pressure gauge calibrators including digital pressure calibrators and portable pressure calibrators.
       </p>
      </div>
    )  
  },
      {
    img: pressure,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Test Gauge Calibration</h2>
        <p>
          Advanced Process Systems test gauge calibration uses our ISO 17025 compliant calibration procedure.
       </p>
      </div>
    )  
  }

  
]

/**
 * similar thing here - each object {} is a FAQ entry
 */
const faqContent = [
  {
    question: "?",
    answer: "A."
  },
  {
    question: "?",
    answer: "A."
  },
    {
    question: "?",
    answer: "A."
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Calibrations FAQs - Frequently Asked Questions" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
