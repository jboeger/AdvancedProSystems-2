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
import validationprocess from "images/validation-process.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced IQ OQ PQ Validation + Equipment Qualification | APS",
  description: "APS provides high level validation + equipment qualification services for lab + industrial processing, pharmaceutical, food + bev, petrochemical, and more. ",
  canonicalUrl: "https://www.advancedprosystems.com/services/iq-oq-pq-validation/",
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
    img: validationprocess,
    imgAlt: "Thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced IQ OQ PQ Validation and Equipment Qualification</h1>
        <p>
           Advanced Processi Syestems provides the highest level of validation and equipment qualification services available for the laboratory, industrial processing, pharmaceutical, food and beverage manufacturing, petrochemical, and all standards dependent industries. 
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
        <h2>Digital and glass thermometer calibration</h2>
        <p>
          Advanced Process Systems provides expert service in glass thermometer calibration and digital thermometer calibration. We have vast experience in how to calibrate a digital thermometer from a variety of manufacturers. We can perform thermometer calibration compliant to ISO 17025 accreditation on how to calibrate a digital thermometer.
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
        <h2>Infrared thermometer calibration</h2>
        <p>
          Advanced Process Systems provides expert service in the calibration of infrared thermometers. We have vast experience in how to calibrate infrared thermometers from a variety of manufacturers. We can perform infrared thermometer calibration compliant to ISO 17025 accreditation on how to calibrate an infrared thermometer.
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
      <h2>Humidity sensor calibration</h2>
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
      <h2>Data logger calibration certificate</h2>
        <p>
          Advanced Process Systems provides expert data logger calibration service for data logger humidity calibratation. We have vast experience in data logger calibration from all OEM manufacturers. We can provide a data logger calibration certificate compliant to ISO 17025 accreditation for temperature data logger calibration.
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
