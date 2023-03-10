import * as React from "react";
import { Section } from "../../components/Section";
import { Layout } from "../../components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "../../components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import bioReactor from "images/card2-lab-02.jpg";
import pressure from "images/Pressure.jpg";
import acousticFlow from "images/Acoustic_Flow.jpg";
import electrical from "images/Electrical.jpg";
import balance from "images/Balance.jpg";
import dimensional from "images/Dimensional.jpg";
import optical from "images/Optical.jpg";
import pipette from "images/Pipette.jpg";
import thermo from "images/Thermometer-Data-Logger.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Calibration Services | Flow, pressure, + more | APS",
  description: "APS performs NIST traceable calibrations in analytical and industrial applications, from flow / pressure to thermal, electrical, and balance calibrations.",
  canonicalUrl: "https://www.advancedprosystems.com/services/calibrations",
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
    img: bioReactor,
    imgAlt: "Close-up photo of lab technician working with a bioreactor. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Calibration Services</h1>
        <p>
           Advanced Processing provides the highest level of standard calibration services to the laboratory, industrial processing, pharmaceutical, food and beverage manufacturing, petrochemical, and standards dependent industries that require accurate recordkeeping, calibration, maintenance, and repair of their instruments. APS calibrates to the calibration standard and if requested hold that data on NIST calibrations in our database managed and audited by ANSI accredited (through ANAB accreditation services).
        </p>
        <p>
           Customers include the range from start-ups to most established biopharma, biotechnology, and biomedical equipment companies to US national laboratories, and food and beverage companies with the most stringent calibration standards. APS works with the full range of requirements from individual calibrations, supplying calibration personnel, OEM calibration services, to setting up the processes for entire metrology departments. In some cases, we provide calibration facilities management.
        </p>

      </div>
    )
  },
    {
    img: pressure,
    imgAlt: "Close-up photo of two pressure guages. ",
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
          <li>Optical Flow Sensor</li>
          <li>Volumetric Flow Meter</li>
          <li>PIn-Line Flow Meter</li>
        </ul>
      </div>
    )
  },
  {
    img: electrical,
    imgAlt: "Photo of a an electical multimeter.",
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
    img: balance,
    imgAlt: "Close-up photo of a balancer. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Mechanical and Balance Calibration</h2>
        <p>
          APS performs NIST traceable ISO 17025 sensor calibration in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly calibrate are digital force gauge, load cell, balance, vernier caliper, height gauge, torque wrench, torque analyzer, torque tester, torque screwdriver, and manometer. Torque wrench calibration is a common request where we expedite service. Several applications of balance calibration, load cell calibration, torque calibration and sensor calibration involve our setting up an initial IOPQ process qualification and validation.
       </p>
        <h3>Types of flow sensor calibrations:</h3>
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
    imgAlt: "Close-up photo of a balancer. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Dimensional Calibration</h2>
        <p>
      APS performs NIST traceable ISO 17025 dimensional calibration of sensors in analytical laboratory and in industrial process applications. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly we perform dimensional calibration on range from calipers to micrometers to all manner of precison gages. APS is often requested to perform dimensional calibration of vernier caliper, height gauge, digital micrometer, and other precision instruments. APS' calibration procedures for micrometers enable us to perform calibrations where there is no longer support by the OEM manufacturer and thereby extend the useful life. Once again, dimensional calibration is a common request where we expedite service. Several applications of dimensional calibrations involve our setting up an initial IQ OQ PQ process qualification and validation.
       </p>
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
    imgAlt: "Optical. ",
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
    imgAlt: "Pipette. ",
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
    img: thermo,
    imgAlt: "thermo. ",
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
