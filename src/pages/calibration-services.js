import * as React from "react";
import { Section } from "../components/Section";
import { Layout } from "../components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "../components/homePage/FAQ";

// image imports
import heroHomeImg from "../images/hero-home-01a-big.jpg";
import bioReactor from "../images/card2-lab-02.jpg";
import pressure from "../images/Pressure.jpg";
import acousticFlow from "../images/Acoustic_Flow.jpg";
import electrical from "../images/Electrical.jpg";
import balance from "../images/Balance.jpg";
import dimensional from "../images/Dimensional.jpg";
import optical from "../images/Optical.jpg";
import pipette from "../images/Pipette.jpg";

export const padding = "40px";

const metaData = {
  title: "",
  description: "",
  canonicalUrl: "",
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
    img: pressure,
    imgAlt: "",
    imgCols: "6",
    content: (
      <div>
        <h2>Pressure Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 pressure gauge calibrations in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration of pressure gauge turnaround. A sampling of gauges we regularly calibrate are digital pressure, analog pressure, differential, and test gages. We also calibrate pressure transducer, pressure transmitter, and pressure calibrator applications as well as other pressure applications using a digital pressure indicator, barometer, or pressure module.
        </p>
        <h3>Types of pressure calibrations:</h3>
        <ul>
          <li>Digital pressure gauge</li>
          <li>Test gauge</li>
          <li>Pressure Transducers</li>
          <li>Digital Indicators</li>
          <li>Pressure transmitters</li>
          <li>Pressure calibrators</li>
          <li>Analogue pressure gauge</li>
          <li>Barometer calibration</li>
          <li>Pressure transmitter calibration</li>
        </ul>
      </div>
    )
  },
  {
    img: "acousticFlow",
    imgAlt: "",
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
          <li>Optical Flow Sensor</li>
          <li>Volumetric Flow Meter</li>
          <li>PIn-Line Flow Meter</li>
        </ul>
      </div>
    )
  },
  {
    img: "electrical",
    imgAlt: "",
    imgCols: "6",
    content: (
      <div>
      <h2>Electrical Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 electrical meter calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration for electrical instrument turnaround. A sampling of electrical instrument calibration we regularly perform are multimeter, barometer, power analyzer, megohmmeter, clamp meter, and data logger. We perform electrical calibrations for many manufacturers of insulation tester, hipot tester (high potential tester), loop tester, and multifunction tester.
      </p>
        <h3>Types of flow sensor calibrations:</h3>
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
    img: "",
    imgAlt: "",
    imgCols: "",
    content: (
      <div>

      </div>
    )  
  },
    {
    img: "",
    imgAlt: "",
    imgCols: "",
    content: (
      <div>

      </div>
    )  
  },
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
    question: "",
    answer: ""
  },
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      {sections.map((sectionProps, idx) => { 
        let imgSide, bgColor;
        if (idx % 2 == 0) {
          imgSide = "right";
          bgColor = "rgb(255,255,255,0)"
        }
        else {
          imgSide = "left";
          bgColor = "rgb(255,255,255,0.3)"
        }
        return <Section key={idx} imgSide={imgSide} bgColor={bgColor} {...sectionProps} />
      })}
      <FAQ title="Calibrations FAQs - Frequently Asked Questions" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
