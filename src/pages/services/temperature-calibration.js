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

const metaData = {
  title: "Advanced Temperature Calibration | Thermometer, Hygrometer",
  description: "APS provides Advanced Temperature Calibration Services for hygrometers, digital + analog thermometers, thermocouples, thermal analysis calibration and more!",
  canonicalUrl: "https://www.advancedprosystems.com/services/temperature-calibration/",
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
    img: thermometer,
    imgAlt: "Thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Temperature Calibration</h1>
        <p>
           Adanced Process Systems performs thermometer calibration, thermocouple calibration, thermal cycler calibration, and thermal probe calibration as we can provide thermometer calibration logs, thermometer calibration certificates, and thermal anlysis calibrations.  APS provides precise temperature calibration with our extensive experience in how to calibrate thermocouples, how to calibrate hygrometers, and how to calibrate thermometers. 
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
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Pressure</a></li>
      <li><strong>Temperature / Thermal</strong></li>
      </ul>
      </p>
      </div>
    )
  },
    {
    img: thermometerglass,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Digital and glass thermometer calibration services</h2>
        <p>
          APS provides expert service in glass thermometer calibration and digital thermometer calibration. We have vast experience in how to calibrate a digital thermometer from a variety of manufacturers. We can perform thermometer calibration compliant to ISO 17025 accreditation. APS is your temperature calibration expert!
        </p>
        <h3>Digital and glass thermometer calibration types include:</h3>
        <ul>
          <li>APS' thermal range of calibration for digital thermometers is from -196C to 680C</li>
          <li>APS' thermal range of calibration for glass thermometers is from -50C to 250C</li>
        </ul>
      </div>
    )
  },
  {
    img: thermometerinfrared,
    imgAlt: "placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Infrared thermometer calibration services</h2>
        <p>
          Advanced Process Systems provides expert service in the calibration of infrared thermometers. We have vast experience in how to calibrate infrared thermometers from a variety of manufacturers. We can perform infrared thermometer calibrations compliant to ISO 17025 accreditation.
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
      <h2>Humidity sensor calibration - Hygrometers!</h2>
        <p>
          APS provides expert humidity calibration service for hygrometers. We have vast experience in relative humidity calibration standards from a variety of manufacturers. We can perform hygrometer calibration complant to ISO 17025 accreditation for humidity sensor calibration.
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
      <h2>Data logger calibration certificates</h2>
        <p>
          APS provides expert data logger calibration service for data logger humidity calibratation. <strong><em>We have vast experience in data logger calibration from all OEM manufacturers</em></strong>. We can provide a data logger calibration certificate compliant to ISO 17025 accreditation.
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
      <FAQ title="Temperature Calibration FAQs - Frequently Asked Questions about Thermometer Calibrations" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
