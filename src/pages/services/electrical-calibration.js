
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
import insulationtester from "images/insulation-tester.jpg";

export const padding = "40px";

const metaData = {
  title: "ISO 17025 Electrical Calibration Services | APS",
  description: "Top-tier ISO 17025 compliant electrical calibration services for multimeters, power supplies, and more. Ensure precision with APS. Contact for rapid turnaround. ",
  canonicalUrl: "https://www.advancedprosystems.com/services/electrical-calibration/",
  img: "https://www.advancedprosystems.com/static/clamp-meter-a6ca78100540561645eec3fce77a7d84.jpg",
  imgAlt: "Picture of an electric clamp on meter for electrical calibration. ",
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
        <h1>Electrical Equipment Calibration Services by Advanced Process Systems</h1>
        <h2>Electrical Meter Calibrations</h2>
        <p>Advanced Process Systems performs precision ISO 17025 compliant electrical calibration for all manner of electronics and instrumentation including multimeters, insulation testers and other electrical test equipment, pressure transmitters, power supplies, hipot testers and clampon meters.
        </p>
      <div class="list-group-wrapper">
      <strong><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations - Main</a></strong>

      <ul>
      <li><strong>Electrical Meter Calibration</strong></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow - Liquid, Fluid, Gas</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li><a href="https://www.advancedprosystems.com/services/pipette-calibration/" title="Pipette Calibration" className="link-primary">Pipette</a></li>
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Gauge Calibration" className="link-primary">Pressure Gauge Calibration</a></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermal</a></li>
      </ul>
      </div>
      </div>
    )
  },
    {
    img: electricalmulti,
    imgAlt: "Picture of a multimeter device to be calibrated. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Multimeter Calibration Services</h2>
        <p>
          Ensure the utmost accuracy with our ISO 17025 compliant multimeter calibration service for all major OEM manufacturers.
        </p>
        <p>
          <mark> Need precision? <a href="https://www.advancedprosystems.com/contact/" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid multimeter calibration turnaround. </mark>
        </p> 
      </div>
    )
  },
  {
    img: insulationtester,
    imgAlt: "Picture of insulation Testers to be calibrated. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Insulation Testers</h2>
        <p>
          Benefit from our industry-leading ISO 17025 compliant insulation testers calibration service, suitable for all major OEM insulation tester manufacturers.
        </p>
       <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact/" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid insulation testers calibration turnaround. </mark>
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
      <h2>ISO 17025 Accredited Power Supply Calibration</h2>
        <p>
          Experience unparalleled accuracy with our power supply calibration services, compliant with ISO 17025 standards.
       </p>
        <p>
          <mark><a href="https://www.advancedprosystems.com/contact/" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid calibration turnaround. </mark>
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
    question: "What is electrical calibration? ",
    answer: "Electrical calibration verifies and adjusts the accuracy of electrical measuring instruments. It's pivotal for ensuring instruments meet industry standards and provide reliable results. "
  },
  {
    question: "Why is adhering to electrical calibration standards crucial? ",
    answer: "Standards from organizations like NIST or ISO are essential for the calibration of electrical instruments. Meeting these standards ensures precision and is a hallmark of quality in the industry. "
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Electronic Calibrations FAQs" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
export { Head } from "../../components/Head.js";