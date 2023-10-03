import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import acousticflow from "images/acoustic-flow.jpg";
import gasflowcontrol from "images/gas-flow-control.jpg";
import liquidflowmeter from "images/liquid-flow-meter.jpg";
import massflow from "images/mass-flow.jpg";
import opticalflow from "images/optical-flow.jpg";
import sonocheckbubblesensor from "images/sono-check-bubble-sensor2.jpg";
import sonocontrol from "images/Sono-control-level-sensor.jpg";
import volumetric from "images/volumetric.jpg";
import sonoinline from "images/SONOFLOW_InlineFlow.jpg";
import flowmeter from "images/flowmeter.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Flow Meter Calibration Services | APS",
  description: "APS provides ISO 17025 compliant calibration for flow meters measuring liquids, gases, and more. Precision and reliability guaranteed. ",
  canonicalUrl: "https://www.advancedprosystems.com/services/flow-sensor-calibrations/",
  img: "https://www.advancedprosystems.com/static/gas-flow-control-e398a4843f7ac07b6fecaa16dd15f706.jpg",
  imgAlt: "Photo of gas flow and liquid flow sensors and flow meters that need to be calibrated.",
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
    img: flowmeter,
    imgAlt: "Photo of gas flow and liquid flow sensors and flow meters that need to be calibrated. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Flow Meter Calibration Services by APS</h1>
        <h2>Ensuring Precision in Flow Measurement</h2>
        <p>Advanced Process Systems is dedicated to elevating the standard in calibration for equipment designed to measure flow. These devices measure the flow rate of fluids, liquids, or gases in transmission systems. Various devices use properties of liquids and gases for precise and efficient measurements, utilizing techniques such as ultrasonic, electromagnetic, Karman vortex, and more.</p>
      
      <p>At APS, we understand the importance of precise calibration for these diverse instruments to ensure the utmost accuracy and stability of the process. Our commitment to excellence underpins every calibration we perform, fostering trust in the precision and reliability of every measurement.
        </p>
      <div class="list-group-wrapper">
      <strong><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations - Main</a></strong>
      
      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electrical, Multimeters</a></li>
      <li><strong>Flow - Fluids, Liquids, Gas</strong></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li><a href="https://www.advancedprosystems.com/services/pipette-calibration/" title="Pipette Calibration" className="link-primary">Pipette</a></li>
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Pressure Gauge Calibration</a></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermometers</a></li>
      </ul>
      </div>
      </div>
    )
  },
    {
    img: gasflowcontrol,
    imgAlt: "Close-up photo of pressure guages and controls. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Gas Flow Meter Calibration</h2>
        <p>
          APS performs <strong>gas flow meter calibration</strong> whether the measurement system is based on a single fundamental parameter or a very complicated process. The gas flow meter used for measurement depends on the technology used.
        </p>
        <h3>Gas flow meter calibration types:</h3>
        <p>There are 8 commonly used technologies in gas flow and liquid flow measurement. They are:</p>
        <ul class="card-columns">
          <li>Electromagnetic</li>
          <li>Vortex time</li>
          <li>Paddle wheel</li>
          <li>Thermal dispersion</li>
          <li>Floating element</li>
          <li>Ultrasonic</li>
          <li>Differential pressure</li>
          <li>Peristaltic pump calibration</li>
          <li>Coriolis</li>
        </ul>
        <h3>Gas flow meters / sensors we regularly calibrate:</h3>
        <p>APS often calibrates the following:</p>
        <ul>
          <li>BlueSens</li>
          <li>BW Technologies - gas calibration</li>
          <li>Draeger calibration</li>
          <li>Mettler-Toledo scale</li>
          <li>MSA - gas calibration</li>
          <li>Omega thermocouple calibration</li>
          <li>RKI Instruments</li>
          <li>Rosemount transmitter calibration</li>
          <li>Sartorius balance calibration</li>
          <li>Siemens calibrations</li>
          <li>Yokogawa flow meter calibration</li>
        </ul>
      <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for gas flow meter calibration services. </mark>
        </p> 
      </div>
    )
  },
  {
    img: liquidflowmeter,
    imgAlt: "Photo of a liquid flow meter. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Liquid Flow Calibration Services</h2>
        <p>
          A liquid flow meter is an instrument designed for measuring the <strong>flow rate</strong> of fluid via a fluid transmission system. APS performs liquid flow rate calibration (flow meter calibration) calibrations whether the measurement system is based on a single fundamental parameter or a very complicated process. The method of measurement depends on the technology used.  <strong><em>We perform backflow test gauge calibrations / flow rate calibrations on a regular basis.</em></strong>
        </p>
        <h3>Liquid flow meters we regularly calibrate:</h3>
        <ul>
          <li>Hoffer flow controls</li>
          <li>Sonotec / Gems Sensors</li>
          <li>TSI Calibration</li>
          <li>Omega thermocouple calibration</li>
          <li>Honeywell calibration</li>
          <li>Micro Motion flow meter calibration</li>
          <li>Rosemount transmitter calibration</li>
          <li>Agilent calibration</li>
        </ul>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for liquid flow rate calibration services. </mark>
        </p> 
      </div>
    )
  },
  {
    img: massflow,
    imgAlt: "Photo of a mass flow controller.",
    imgCols: "6",
    content: (
      <div>
      <h2>Mass Flow Controller Calibration Services</h2>
        <p>
          APS performs <strong>mass flow meter calibrations / flow rate calibrations</strong> to the finest of tolerances in gas measurement. Because the mass flow controller is a specific inline device it is critical that is regularly maintained and calibrated in laboratories or production settings. Mass flow sensor calibration requires both measurement and control functions all the while tight thermal / pressure control is maintained for consistent volumetric metering.
      </p>
      <h3>We calibrate these leading mass flow meters: </h3>
      <ul>
      <li>Brooks</li>
      <li>Burkert</li>
      <li>Bronkhorst</li>
      <li>Porter</li>
      </ul>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for mass flow meter calibration services. </mark>
        </p> 
      </div>
    )  
  },
    {
    img: volumetric,
    imgAlt: "Photo of volumetric flow multi meter with dial indicators and controls. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Volumetric Flow Meters Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 volumetric flow sensor calibration in analytical laboratory / industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted to our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly calibrate include: digital force gauge, load cell, balance, vernier caliper, height gauge, torque wrench, torque analyzer, torque tester, torque screwdriver, and manometer. <strong>Torque wrench calibration is a common request where we expedite service</strong>. Several applications of balance calibration, load cell calibration, torque calibration and flow sensor calibration involve our setting up an initial IOPQ process qualification and validation.
       </p>
      <h3>We calibrate these leading volumetric flow meters:</h3>
      <ul>
      <li>Copley</li>
      <li>TSI</li>
      </ul>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for volumetric flow meter calibration services. </mark>
        </p> 
      </div>
    )  
  },
        {
    img: sonoinline,
    imgAlt: "Picture of Sonotec in-line flow meters. ",
    imgCols: "6",
    content: (
      <div>
      <h2>In-Line Flow Meters Calibration Services</h2>
        <p>
APS works with NIST traceable ISO 17025 <strong>in-line flow meter calibration</strong> in analytical laboratory and in industrial process applications. These flow meters work on a variety of physical properties that include acoustic, optical, volumetric, or gravimetric methods.
        </p>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for IN-LINE flow meter calibration services. </mark>
        </p> 
      </div>
    )  
  },
  {
    img: sonocontrol,
    imgAlt: "Picture of Sonoflow acoustic flow sensor. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Acoustic Flow Sensor Calibration - inline or non-invasive</h2>
        <p>
APS performs <strong>acoustic flow meter calibration</strong> that incorporates the geometric calibration of the tube or pipe the liquid passes through. APS performs acoustic flow sensor calibration on flow meters, bubble sensors, and level sensors using this technology. <strong>Inline or non-invasive available!</strong>
      </p>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for acoustic flow sensor calibration services. </mark>
        </p> 
      </div>
    )  
  },
  {
    img: opticalflow,
    imgAlt: "Photo of optical flow sensor. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Optical Flow Sensor Calibration - Inline or non-invasive</h2>
        <p>
APS performs NIST traceable ISO 17025 <strong>optical flow sensor</strong> calibration in analytical laboratory and in industrial process applications. APS calibrates these sensors whether the optical flow meter measures through optical fiber interferometry, optical hot-wire anemometry, or scintillation. Inline or non-invasive available.
      </p>
      <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for optical flow meter calibration services. </mark>
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
    question: "What are in-line flow meters?",
    answer: "In-line flow meters are integral for real-time flow rate measurements in tubes or pipelines. They find applications in labs and industries, with types varying based on the application and fluid properties. "
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Flow Meter Calibration FAQs" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
