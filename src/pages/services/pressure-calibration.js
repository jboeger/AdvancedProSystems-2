
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
import pressurebioreactor from "images/bioreactor-with-pressure-monitoring.jpg";
import filterintegrity from "images/filter-integrity-tester-analog-gauge.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Pressure Gauge Calibration | Sensors + Transmitters",
  description: "APS calibrates pressure gauges using industry standards of pressure sensor calibration from all manufacturers! Digital and analogue, pressure transmitters, and more!",
  canonicalUrl: "https://www.advancedprosystems.com/services/pressure-calibration/",
  img: "https://www.advancedprosystems.com/static/pressure-controller-5aa5097b2a0d09f63629c6db2714ba88.jpg",
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
    img: pressurebioreactor,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Pressure Calibration</h1>
        <p>
           Advanced Process Systems (APS) is dedicated to the meticulous calibration of pressure gauge standards, a critical procedure that forms an integral part of our ISO 17025 compliant pressure gauge calibration process. Our extensive knowledge and expertise at APS allow us to proficiently calibrate pressure gauges, employing industry-wide standards for pressure sensor calibration. This proficiency extends to equipment from all manufacturers, reflecting our commitment to universal quality and accuracy.
        </p>
      <p><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations main page</a>
      </p>
            <p>
      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electrical</a></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow Sensor</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li>Pipette</li>
      <li><strong>Pressure Gauge Calibration</strong></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermal</a></li>
      </ul>
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
        <h2>Digital Pressure Gauge Calibration Services</h2>
        <p>
          Advanced Process Systems provides expert <strong>digital pressure gauge calibration service</strong> for digital pressure gauges and indicators. We have vast experience in digital pressure gauges / pressure calibration from all OEM manufacturers.
        </p>
      </div>
    )
  },
  {
    img: filterintegrity,
    imgAlt: "placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Advanced Analogue Pressure Gauge Calibration Services</h2>
        <p>
          Advanced Process Systems provides expert analog pressure gauge calibration services for your analogue pressure instruments and indicators. 
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
      <h2>Pressure Transmitter Calibration Services</h2>
        <p>
          Advanced Process Systems provides an expert <strong>pressure transmitter calibration services</strong> using our ISO 17025 compliant pressure transmitter calibration procedure. We have vast experience in <strong>Rosemount pressure transmitter calibration</strong> as well as other OEM manufacturers.
      </p>
      </div>
    )  
  },
    {
    img: pressurecontroller,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Pressure Calibrators</h2>
        <p>
          Advanced Process Systems pressure calibrators use our ISO 17025 compliant pressure calibrators procedure. We have vast experience in pressure gauge calibrators / pressure calibration including <strong>digital pressure calibrators</strong> and <strong>portable pressure calibrators</strong>.
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
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Pressure Calibration FAQs - Frequently Asked Questions about Pressure Gauge Calibrations" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
