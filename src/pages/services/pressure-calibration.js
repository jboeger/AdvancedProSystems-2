
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
  description: "APS calibrates pressure gauges to all manufacturer industry standards of pressure sensor calibration! Digital + analogue, pressure transmitters, and more!",
  canonicalUrl: "https://www.advancedprosystems.com/services/pressure-calibration/",
  img: "https://www.advancedprosystems.com/static/pressure-controller-5aa5097b2a0d09f63629c6db2714ba88.jpg",
  imgAlt: "Photo of a collection of analog and digital pressure gauges, controllers, and pressure transmitters. ",
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
      <div class="list-group-wrapper">
      <h3><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations - Main" className="link-primary">Advanced Calibrations - Main</a></h3>

      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electrical / Multimeters</a></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow - Gas, fluid, liquid</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li><a href="https://www.advancedprosystems.com/services/pipette-calibration/" title="Pipette Calibration" className="link-primary">Pipette</a></li>
      <li><strong>Pressure Gauge Calibration</strong></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermal</a></li>
      </ul>
      </div>
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
      Advanced Process Systems proudly offers exceptional <strong>digital pressure gauge calibration</strong> services for both digital pressure gauges and indicators. Our extensive experience in digital pressure gauge calibration encompasses devices from all Original Equipment Manufacturer (OEM) sources, showcasing our dedication to delivering precise and accurate results across a wide range of instruments.
        </p>
           <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for digital pressure gauge calibration services. </mark>
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
          Advanced Process Systems offers expert <strong>analog pressure gauge calibration</strong> services for all your analog pressure instruments and indicators. Unlike their digital counterparts, analog gauges provide an inherent ruggedness and simplicity, making them indispensable in certain environments and applications. Their unique functionality, with no requirement for power sources and resistance to power surges, underscores the importance of their meticulous calibration. At APS, we understand these subtle nuances between analog and digital devices, and we tailor our services to ensure each device's unique needs are met with precision and accuracy.
        </p>
                 <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for analog pressure gauge calibration services. </mark>
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
                 <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for pressure transmitter calibration services. </mark>
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
          Advanced Process Systems brings an exceptional level of expertise to our pressure calibration procedures, adhering strictly to ISO 17025 standards. Our proficiency spans a broad spectrum of <strong>pressure gauge calibrators</strong>, inclusive of <strong>digital and portable pressure calibrators</strong>. Each type of calibrator offers unique advantages: the digital variant provides precision with easy-to-read displays, while portable models ensure flexibility and convenience for on-site calibrations. At APS, we have amassed considerable experience across these varying calibrators, enabling us to deliver precise, reliable calibration services attuned to each specific device and its intended application.
       </p>
                 <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for pressure calibrators calibration services. </mark>
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
          Advanced Process Systems employs our ISO 17025 compliant calibration procedure in our test gauge calibration services. This process ensures we maintain the highest level of precision and accuracy, demonstrating our commitment to excellence in every calibration we perform.
       </p>
                 <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for test gauge calibration services. </mark>
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
    question: "What is pressure calibration? ",
    answer: "Pressure calibration is the process of verifying and adjusting the accuracy of instruments used to measure pressure by comparing them to a reference standard. This can include pressure gauges, transducers, and sensors. The goal of calibration is to ensure that the instrument is measuring pressure correctly and providing reliable measurements. While pressure gauge calibration specifically refers to the calibration of pressure gauges, pressure calibration encompasses a wider range of instruments used to measure pressure. Regular calibration of pressure instruments is important for maintaining accuracy and meeting industry standards and regulations. Calibration can be done in-house using specialized equipment, or by sending the instrument to a calibration laboratory. "
  },
    {
    question: "What is pressure gauge calibration? ",
    answer: "Pressure gauge calibration is the process of checking and adjusting the accuracy of a pressure gauge by comparing its readings to a reference standard of known accuracy. It ensures that the pressure gauge is measuring pressure correctly, so it can be relied upon for accurate and reliable measurements. Regular calibration is important for maintaining accuracy and meeting industry standards and regulations. "
  },
      {
    question: "What is a pressure transmitter? ",
    answer: "A pressure transmitter measures and transmits pressure readings in industrial applications. Accurate readings are crucial for safety and avoiding errors. Proper calibration is necessary to maintain accuracy and prevent costly errors. "
  },
        {
    question: "What is a differential pressure transmitter? ",
    answer: "A differential pressure transmitter measures the difference in pressure between two points in a system. They are commonly used in industrial applications such as flow measurement and require regular calibration to ensure accurate and reliable measurements. "
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
