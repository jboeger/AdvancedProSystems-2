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

export const padding = "40px";

const metaData = {
  title: "Flow Sensor Calibration | Gas Flow Meter | Controllers | APS",
  description: "APS performs advanced calibration services for flow sensors, gas flow meters, optical flow sensors, mass flow controllers, liquid flow sensors and more.",
  canonicalUrl: "https://www.advancedprosystems.com/services/flow-sensor-calibrations/",
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
    img: sonocheckbubblesensor,
    imgAlt: "Close-up photo of lab technician working with a calibrated bioreactor. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Flow Sensor Calibrations</h1>
        <p>
           Advanced Processing provides the highest level of standard calibration for all equipment designed for the measurement of flow. Flow sensors measure the flow rate of a fluid, liquid, or gas when it passes through a confined transmission system. There are a variety of instruments that use the physical properties of liquids and gas to measure them most accurately and economically. The instruments operate using ultrasonic, electromagnetic, Karman vortex, paddlewheel, floating element, thermal, and differential pressure methods of measurement. They all most be calibrated to make sure the process is accurate and stable.
        </p>
      <p><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations main page</a>
      </p>
      </div>
    )
  },
    {
    img: gasflowcontrol,
    imgAlt: "Close-up photo of two pressure guages. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Gas Flow Meters and Sensors</h2>
        <p>
          APS performs gas flow sensor calibrations whether the measurement system is based on a single fundamental parameter or a very complicated process. The gas flow meter used for measurement depends on the technology used.
        </p>
        <h3>Gas flow and liquid flow metering technology types:</h3>
        <p>There are 8 commonly used technologies in gas flow and liquid flow measurement. They are:</p>
        <ul>
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
        <h3>Leading brands and common equipment calibrated and serviced</h3>
        <p>Advanced Calibrations Services include the following:</p>
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
      </div>
    )
  },
  {
    img: liquidflowmeter,
    imgAlt: "Photo of a liquid flow meter. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Liquid Flow Meter Calibration</h2>
        <p>
          A liquid flow meter is an instrument designed for measuring the rate of fluid flow via a fluid transmission system. APS performs liquid flow meter calibrations whether the measurement system is based on a single fundamental parameter or a very complicated process. The method of measurement depends on the technology used.  <strong>We perform backflow test gauge calibration on a regular basis.</strong>
        </p>
        <h3>Leading liquid flow meter brands that we calibrate and service:</h3>
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
      </div>
    )
  },
  {
    img: massflow,
    imgAlt: "Photo of a mass flow controller.",
    imgCols: "6",
    content: (
      <div>
      <h2>Mass Flow Meter Calibrations</h2>
        <p>
          APS performs mass flow meter calibrations to the finest of tolerances in gas measurement. Because the mass flow controller is a specific inline device it is critical that is regularly maintained and calibrated in laboratories or production settings. The mass flow sensor requires calibration for both it’s measurement and control functions all the while tight thermal/pressure control is maintained for consistent volumetric metering.
      </p>
      <h3>Leading mass flow meters calibrated and serviced: </h3>
      <ul>
      <li>Brooks</li>
      <li>Burkert</li>
      <li>Bronkhorst</li>
      <li>Porter</li>
      </ul>
      </div>
    )  
  },
    {
    img: volumetric,
    imgAlt: "Close-up photo of a perfectly balanced weight. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Volumetric Flow Meter Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 sensor calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly calibrate are digital force gauge, load cell, balance, vernier caliper, height gauge, torque wrench, torque analyzer, torque tester, torque screwdriver, and manometer. Torque wrench calibration is a common request where we expedite service. Several applications of balance calibration, load cell calibration, torque calibration and sensor calibration involve our setting up an initial IOPQ process qualification and validation.
       </p>
      <h3>Leading brands calibrated and serviced:</h3>
      <ul>
      <li>Copley</li>
      <li>TSI</li>
      </ul>
      </div>
    )  
  },
        {
    img: sonoinline,
    imgAlt: "Sonotec in-line flow meter calibration. ",
    imgCols: "6",
    content: (
      <div>
      <h2>In-Line Flow Meters</h2>
        <p>
APS works with NIST traceable ISO 17025 in-line flow meter calibration in analytical laboratory and in industrial process applications. These meters work on a variety of physical properties that include acoustic, optical, volumetric, or gravimetric methods.
        </p>
      </div>
    )  
  },
  {
    img: sonocontrol,
    imgAlt: "Sonoflow control. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Acoustic Flow Sensor - Inline or non-invasive acoustic flow sensor calibration</h2>
        <p>
APS performs acoustic flow meter calibration that incorporates the geometric calibration of the tube or pipe the liquid passes through. APS performs acoustic flow sensor calibration on flow meters, bubble sensors, and level sensors using this technology. Inline or non-invasive available.
      </p>
      </div>
    )  
  },
  {
    img: opticalflow,
    imgAlt: "Photo of a pipette getting dipped into a test tube. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Optical Flow Sensor - Inline or non-invasive optical flow sensor calibration</h2>
        <p>
APS performs NIST traceable ISO 17025 optical flow sensor calibration in analytical laboratory and in industrial process applications. APS calibrates these sensors whether the optical flow meter measures through optical fiber interferometry, optical hot-wire anemometry, or scintillation. Inline or non-invasive available.
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
