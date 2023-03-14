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
import sonoinline from "images/sono-inline-flow.jpg";
import volumetric from "images/volumetric.jpg";

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
          <li>Coriolis</li>
        </ul>
      </div>
    )
  },
  {
    img: acousticFlow,
    imgAlt: "Photo of a non-invasive flow meter. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Flow Sensor Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 flow sensor calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration of flow meter turnaround. A sampling of flow sensors we regularly calibrate are liquid flow, gas flow and mass flow meters using in-line flow, volumetric flow or optical flow technology. We also calibrate mass flow controllers and other non-invasive flow measurement equipment.
        </p>
        <h3>Types of flow sensor calibrations:</h3>
        <ul>
          <li>Gas Flow Meter</li>
          <li>Mass Flow Controllers</li>
          <li>Liquid Flow Meter</li>
          <li>Volumetric Flow Meter</li>
          <li>PIn-Line Flow Meter</li>
        </ul>
      </div>
    )
  },
  {
    img: electrical,
    imgAlt: "Photo of a an electical multimeter used in electrical calibration.",
    imgCols: "6",
    content: (
      <div>
      <h2>Electrical Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 electrical meter calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration for electrical instrument turnaround. A sampling of electrical instrument calibration we regularly perform are multimeter, barometer, power analyzer, megohmmeter, clamp meter, and data logger. We perform electrical calibrations for many manufacturers of insulation tester, hipot tester (high potential tester), loop tester, and multifunction tester.
      </p>
        <h3>Types of electrical calibrations:</h3>
        <ul>
          <li>Barometers</li>
          <li>Multimeters</li>
          <li>Data Loggers</li>
          <li>Insulation Testers</li>
          <li>Power Analyzers</li>
          <li>Megohmmeters</li>
          <li>Clamp meters</li>
          <li>Hipot Testers</li>
          <li>Loop Testers</li>
          <li>Multifunction Testers</li>
        </ul>
      </div>
    )  
  },
    {
    img: balance,
    imgAlt: "Close-up photo of a perfectly balanced weight. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Mechanical and Balance Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 sensor calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly calibrate are digital force gauge, load cell, balance, vernier caliper, height gauge, torque wrench, torque analyzer, torque tester, torque screwdriver, and manometer. Torque wrench calibration is a common request where we expedite service. Several applications of balance calibration, load cell calibration, torque calibration and sensor calibration involve our setting up an initial IOPQ process qualification and validation.
       </p>
        <h3>Types of mechanical and balance calibrations:</h3>
        <ul>
          <li>Load Cell Sensor Calibration</li>
          <li>Vernier Calipers</li>
          <li>Torque wrench calibration</li>
          <li>Height Gauge</li>
          <li>Manometers</li>
          <li>Digital Force Gauge</li>
          <li>Torque analyzers / torque testers</li>
          <li>Torque screwdriver calibration</li>
        </ul>
      </div>
    )  
  },
        {
    img: dimensional,
    imgAlt: "Close-up photo of calipers getting perfectly calibrated in the laboratory. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Dimensional Calibration</h2>
        <p>
APS performs NIST traceable ISO 17025 dimensional calibration of sensors in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly we perform dimensional calibration on range from calipers to micrometers to all manner of precison gages. APS is often requested to perform dimensional calibration of vernier caliper, height gauge, digital micrometer, and other precision instruments. APS' calibration procedures for micrometers enable us to perform calibrations where there is no longer support by the OEM manufacturer and thereby extend the useful life. Once again, dimensional calibration is a common request where we expedite service. Several applications of dimensional calibrations involve our setting up an initial IQ OQ PQ process qualification and validation.       </p>
        <h3>Types of physical / dimensional calibrations:</h3>
        <ul>
          <li>Calipers calibration</li>
          <li>Micrometers calibration</li>
          <li>Dial test indicators calibration</li>
          <li>Height gages</li>
          <li>Pin gages</li>
          <li>Threaded plug gages</li>
        </ul>
      </div>
    )  
  },
            {
    img: optical,
    imgAlt: "Photo of optical connectors that need calibration. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Optical Calibration Services</h2>
        <p>
APS performs NIST traceable ISO 17025 optical calibration of sensors in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. We perform optical comparator calibration or calibration of the optical comparator calibration kit. We will provide optical level calibration, optical calibration,or optical calibration services in general.
      </p>
      </div>
    )  
  },
  {
    img: pipette,
    imgAlt: "Photo of a pipette getting dipped into a test tube. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Pipette Calibration</h2>
        <p>
APS performs NIST traceable ISO 17025 pipette calibration services on all manor of pipettes whether they are a single channel pipette,  multichannel pipette, digital pipette, or repeat pipette. Manufacturers we calibrate regularly are Rainin, Eppendorf, Hamilton, Gilsons, Thermo Fisher Scientific, and Mettler-Toledo,. We can accommodate equipment overnighted into our laboratory for rapid calibration and instrument turnaround. Our pipette calibration services include the calibration of pipette controllers.
      </p>
        <h3>Types of pipette calibration services:</h3>
        <ul>
          <li>Pipette calibration service</li>
          <li>Rainin pipette calibration</li>
          <li>Eppendorf pipette calibration</li>
          <li>Multichannel pipette calibration</li>
        </ul>
      </div>
    )  
  },
  {
    img: thermometer,
    imgAlt: "Photo of a thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Thermometer Calibration</h2>
        <p>
APS performs NIST traceable ISO 17025 thermometer calibration in analytical laboratory and in industrial process applications. We can quickly accommodate equipment overnighted into our laboratory for rapid calibration and instrument turnaround. We perform thermometer calibration on a range of applicatons that also include humidity calibration. Many of these applications include datalogger calibration that includes the thermometer calibration. Several applications of thermometer calibration and humidity calibration require us to set up an initial IQ OQ PQ process qualification and validation.
      </p>
        <h3>Types of thermometer calibration:</h3>
        <ul>
          <li>Thermometer / temperature probe / thermocouple calibration</li>
          <li>Humidity sensor calibration</li>
          <li>Infrared thermometer calibration</li>
          <li>Data logger calibration certificate</li>
          <li>Thermometer calibration log</li>
          <li>Thermal mass flow calibration</li>
        </ul>
      </div>
    )  
  }
]

/**
 * similar thing here - each object {} is a FAQ entry
 */
const faqContent = [
  {
    question: "What does NIST traceable mean?",
    answer: "National Institute of Standards and Technology standard of cradle to grave historical recordkeeping on equipment."
  },
  {
    question: "Who is ANAB?",
    answer: "The ANSI National Accreditation Board (ANAB) is a non-governmental organization that provides accreditation services and training to public- and private-sector organizations"
  },
    {
    question: "What is IQ OQ PQ  validation?",
    answer: "Installation Qualification, Operational Qualification, and Performance Qualificaton refers to establishing and documenting a process to test new instruments after initial installation in the conditions they operate in, and to the standards that they can be expected to perform too."
  },
  {
    question: "Does APS provide calibrations near me?",
    answer: "We provide on-site calibrations throughout the US and Canada as well as centralized instrument calibration through our facilities in Pleasanton, CA and St. Petersburg, FL."
  },
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
