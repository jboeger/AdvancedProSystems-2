
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
  title: "Advanced Electrical Meter Calibration | Multimeters | APS",
  description: "APS performs electrical meter calibration for all manager of instrumentation including hipot testers, insulation testers, and clamp-on meters. ",
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
        <h2>Electrical Meter Calibration</h2>
        <p>
           Adanced Process Systems performs precise ISO 17025 compliant electrical calibration for all manner of instrumentation including multimeters, insulation testers, pressure transmitters, power supplies, hipot testers and clampon meters.
        </p>
      <p><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations main page</a>
      </p>
      <p>
      <ul>
      <li><strong>Electrical Meter Calibration</strong></li>
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
          Advanced Process Systems provides expert ISO 17025 compliant multimeter calibration service for all OEM multimeter manufacturers. 
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
          APS provides expert ISO 17025 compliant <strong>insulation testers calibration</strong> service for all OEM insulation tester manufacturers. 
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
          Advanced Process Systems provides an expert ISO 17025 compliant <strong>pressure transmitter calibration</strong> services. We have vast experience in Rosemount pressure transmitter calibration as well as from all other OEM pressure transmitter manufacturers.
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
          APS provides expert ISO 17025 compliant POWER SUPPLY calibration services.
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
    question: ". ",
    answer: ". "
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Electrical Calibrations FAQs - Frequently Asked Questions" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
