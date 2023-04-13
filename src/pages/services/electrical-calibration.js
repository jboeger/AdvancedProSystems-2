
import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import pressure from "images/Pressure.jpg";
import electrical from "images/Electrical.jpg";
import electricalmulti from "images/multimeter.jpg";
import electricalclamp from "images/clamp-meter.jpg";
import electricalsupplies from "images/power-supplies.jpg";
import pressuretransmitter from "images/pressure-transmitter.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Electrical Calibration | Multimeter Calibration Services",
  description: "Advanced Processing Systems performs electrical calibration for all manager of instrumentation including hipot testers and clamp-on meters. ",
  canonicalUrl: "https://www.advancedprosystems.com/services/electrical-calibration/",
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
    img: electricalclamp,
    imgAlt: "Picture of an electric clamp on meter for electrical calibration. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Electrical Calibration</h1>
        <p>
           Adanced Process Systems performs electrical calibration for all manner of instrumentation including hipot testers and clampon meters. APS provides precise ISO 17025 compliant electrical meter calibration.
        </p>
      <p><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations main page</a>
      </p>
      <p>
      <ul>
      <li><strong>Electrical</strong></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow Sensor</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li>Pipette</li>
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Pressure</a></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermal</a></li>
      </ul>
      </p>
      </div>
    )
  },
    {
    img: electricalmulti,
    imgAlt: "Picture of a multimeter device. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Multimeter calibration</h2>
        <p>
          Advanced Process Systems provides expert multimeter calibration service for all OEM manufacturers of multimeters. Full service multimeter calibration services are as close as any "multimeter calibration near me" with our overnight calibration and shipping service compliant to ISO 17025.
        </p>
      </div>
    )
  },
  {
    img: electrical,
    imgAlt: "Insulation Testers. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Insulation Testers</h2>
        <p>
          Insulation testers calibration services are as close as our available overnight calibration and shipping service compliant to ISO 17025. 
        </p>
      </div>
    )
  },
  {
    img: pressuretransmitter,
    imgAlt: "Picture of a pressure transmitter.",
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
    img: electricalsupplies,
    imgAlt: "Picture of a power supply. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Power Supply</h2>
        <p>
          Power supplies calibration services are as close as our available overnight calibration and shipping service compliant to ISO 17025.
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
