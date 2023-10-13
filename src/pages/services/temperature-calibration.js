import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import thermometer from "images/thermometer-data-logger-1.png";
import thermometerglass from "images/glass-thermometer.jpg";
import thermometerinfrared from "images/infrared-thermometer.jpg";
import thermometerdata from "images/Thermometer-Data-Logger.png";
import thermometerlab from "images/thermometers-in-lab.jpg";
import humidmeter from "images/relative-humidity-and-temperature-meter.jpg";

export const padding = "40px";

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
    img: thermometer,
    imgAlt: "Thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
        <h1>NIST Traceable Thermometer Calibration Services</h1>
      <h2>APS Calibrates Thermometers, Humidity Sensors, and Data Loggers</h2>
        <p>APS performs thermometer calibration log and thermocouple calibrations, thermal cycler calibration, and thermal probe calibration as we can provide thermometer calibration logs, thermometer calibration certificates, and thermal anlysis calibrations. APS provides precise temperature calibration with our extensive experience in how to calibrate thermocouples, how to calibrate hygrometers, and how to calibrate thermometers. </p>
      <div class="list-group-wrapper">
      <strong><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations - Main</a></strong>

      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electric, Multimeters</a></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow Rat Calibration - Gas, Fluid, Liquid</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li><a href="https://www.advancedprosystems.com/services/pipette-calibration/" title="Pipette Calibration" className="link-primary">Pipette Calibration</a></li>
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Pressure Gauge Calibration</a></li>
      <li><strong>Temperature / Thermometers</strong></li>
      </ul>
      </div>
      </div>
    )
  },
    {
    img: thermometerglass,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>NIST Certified Thermometer Calibration Services</h2>
        <p>
          APS provides expert service in glass thermometer calibration and digital thermometer calibration. We have vast experience in how to calibrate a digital thermometer from a variety of manufacturers. We can perform thermometer calibration compliant to ISO 17025 accreditation. APS is your temperature calibration expert!
        </p>
        <h3>Digital / glass thermometers we typically calibrate:</h3>
        <ul>
          <li>APS' thermal range of calibration for digital thermometers is from -196C to 680C</li>
          <li>APS' thermal range of calibration for glass thermometers is from -50C to 250C</li>
        </ul>
        <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid digital thermometer calibration turnaround. </mark>
        </p> 
      </div>
    )
  },
  {
    img: thermometerinfrared,
    imgAlt: "placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Infrared Thermometer Calibration Services</h2>
        <p>
          APS provides expert service in the calibration of infrared thermometers. We have vast experience in how to calibrate infrared thermometers from a variety of manufacturers. We can perform infrared thermometer calibration standard compliant to ISO 17025 accreditation.
        </p>
      <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid infrared thermometer calibration standard turnaround. </mark>
        </p> 
      </div>
    )
  },
  {
    img: humidmeter,
    imgAlt: "placeholder.",
    imgCols: "6",
    content: (
      <div>
      <h2>Humidity Sensor Calibration - Hygrometers!</h2>
        <p>
          APS provides expert humidity calibration service for hygrometers. We have vast experience in relative humidity calibration standards from a variety of manufacturers. We can perform hygrometer calibration complant to ISO 17025 accreditation for humidity sensor calibration.
      </p>
            <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid humidity sensor calibration turnaround. </mark>
        </p> 
      </div>
    )  
  },
    {
    img: thermometerdata,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Data Logger Calibration Certificates</h2>
        <p>
          APS provides expert data logger calibration service for data logger humidity calibratation. <strong><em>We have vast experience in data logger calibration from all OEM manufacturers</em></strong>. We can provide a data logger calibration certificate compliant to ISO 17025 accreditation.
       </p>
            <p>
          <mark> Need overnight calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid data logger calibration certificate turnaround. </mark>
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
    question: "What is temperature calibration?",
    answer: "Temperature calibration is the process of checking and adjusting the accuracy of instruments used to measure temperature, such as thermometers and temperature sensors. Calibration involves comparing the instrument to a reference standard of known accuracy, and making adjustments to ensure accurate and reliable measurements. Regular calibration is important for meeting industry standards and regulations. "
  },
    {
    question: "What is thermometer calibration?",
    answer: "Thermometer calibration ensures accurate temperature measurement. Digital thermometers are calibrated by comparing readings to a reference standard, glass thermometers are calibrated at specific temperature points, and infrared thermometers are calibrated against a known reference. Regular calibration is important for meeting industry standards and regulations. "
  },
      {
    question: "How does 'constant temp' affect thermocouple calibration?",
    answer: "A stable temperature environment is essential during thermocouple calibration to obtain accurate results. Temperature fluctuations can affect the accuracy of the thermocouple readings. A constant temperature is typically achieved using a temperature-controlled furnace or a dry block calibrator. "
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="NIST Traceable Thermometer Calibration FAQs" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
export { Head } from "../../components/Head.js";
