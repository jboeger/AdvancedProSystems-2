import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import bioReactor from "images/card2-lab-02.jpg";
import pressure from "images/Pressure.jpg";
import acousticFlow from "images/Acoustic_Flow.jpg";
import balance from "images/Balance.jpg";
import dimensional from "images/Dimensional.jpg";
import optical from "images/Optical.jpg";
import pipette from "images/Pipette.jpg";
import thermometer from "images/thermometer-data-logger-1.png";
import electricalclamp from "images/clamp-meter.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Calibration Services | NIST Calibrations",
  description: "APS performs NIST traceable calibrations in analytical and industrial applications, from flow / pressure to thermal, electrical, and balance calibrations.",
  canonicalUrl: "https://www.advancedprosystems.com/services/calibrations/",
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
    imgAlt: "Close-up photo of lab technician working with a calibrated bioreactor. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Calibration Services</h1>
        <p>
           APS provides the highest level of standard calibration services to the laboratory, industrial processing, pharmaceutical, food and beverage manufacturing, petrochemical, and standards dependent industries that require accurate recordkeeping, calibration, maintenance, and repair of their instruments. APS calibrates to the calibration standard and if requested hold that data on NIST calibrations in our database managed and audited by ANSI accredited (through ANAB accreditation services).
        </p>
        <p>
           Customers include the range from start-ups to most established biopharma, biotechnology, and biomedical equipment companies to US national laboratories, and food and beverage companies with the most stringent calibration standards. APS works with the full range of requirements from individual calibrations, supplying calibration personnel, OEM calibration services, to setting up the processes for entire metrology departments. In some cases, we provide comprehensive calibration facilities management.
        </p>

          <p>
In the event an <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation" className="link-primary">IQ OQ PQ validation</a> is necessary, APS can expedite the process with all the necessary calibrations. Whether the IQ/OQ/PQ validation SOP needs to be written from scratch or a pre-approved package needs to be strictly adhered to, APS will provide the most efficient, timely, and cost effective solution.
      </p>
      <div class="list-group-wrapper">
      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electrical, Multimeters</a></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow - Gas, Fluid, Liquid</a></li>
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
    img: pressure,
    imgAlt: "Close-up photo of two pressure guages. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Pressure Calibration Services</h2>
        <p>
          APS performs <a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">NIST traceable ISO 17025 pressure gauge calibration services</a> in laboratory and industrial process applications. <strong>We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid pressure gauge calibration turnaround</strong>. A sampling of gauges we regularly calibrate are digital pressure, analog pressure, differential, and test gages. We also calibrate pressure transducer, pressure transmitter, and pressure calibrator applications as well as other pressure applications using a digital pressure indicator, barometer, or pressure module.
        </p>
        <h3>Pressure calibration types include:</h3>
        <ul>
          <li>Digital pressure gauge</li>
          <li>Test gauge</li>
          <li>NIST calibrations</li>
          <li>Pressure transducers</li>
          <li>Digital indicators</li>
          <li>Pressure transmitters</li>
          <li>Pressure calibrators</li>
          <li>Analogue pressure gauge</li>
          <li>Barometer calibration</li>
          <li>Pressure transmitter calibration</li>
        </ul>
        <p>More information about <a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Advanced Pressure Calibration Services</a>.
      </p>
      </div>
    )
  },
  {
    img: acousticFlow,
    imgAlt: "Photo of a non-invasive flow meter that needs to be calibrated. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Flow Sensor Calibration Services</h2>
        <p>
          APS performs NIST traceable ISO 17025 <a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibrations" className="link-primary">flow sensor calibration</a> in laboratory and industrial settings. <strong>We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid flow meter calibration turnaround</strong>. A sampling of flow sensors we regularly calibrate are liquid flow, gas flow and mass flow meters using in-line flow, volumetric flow or optical flow technology. We also calibrate mass flow controllers and other non-invasive flow measurement equipment.
        </p>
        <h3>Flow sensor calibration types inclue:</h3>
        <ul>
          <li>Gas flow meter</li>
          <li>Mass flow controllers</li>
          <li>Liquid flow meter</li>
          <li>Volumetric flow meter</li>
          <li>Pin-line flow meter</li>
          <li>NIST calibrations</li>
        </ul>
      <p>More information about <a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibrations" className="link-primary">Advanced Flow Sensor Calibration Services</a>.
      </p>
      </div>
    )
  },
  {
    img: electricalclamp,
    imgAlt: "Photo of a an electical multimeter used in electrical calibration.",
    imgCols: "6",
    content: (
      <div>
      <h2>Electrical Calibration Services</h2>
        <p>
          APS performs <a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">NIST traceable ISO 17025 electrical meter calibration</a> in lab and industrial settings. <strong>We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid electrical meter calibration and turnaround</strong>. A sampling of electrical instrument calibration we regularly perform include: multimeter, clamp meter, and data logger. We perform electrical calibrations for many manufacturers of insulation tester, hipot tester (high potential tester), loop tester, and multifunction tester.
      </p>
        <h3>Electrical meter calibration types include:</h3>
        <ul>
          <li>Data Loggers</li>
          <li>Insulation Testers</li>
          <li>Power Supplies</li>
          <li>NIST calibrations</li>
          <li>Megohmmeters</li>
          <li>Clamp Meters</li>
          <li>Hipot Testers</li>
          <li>Loop Testers</li>
          <li>Multifunction testers</li>
        </ul>
            <p>More information about <a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Advanced Electrical Calibration Services</a>.
      </p>
      </div>
    )  
  },
    {
    img: balance,
    imgAlt: "Close-up photo of a perfectly balanced weight -- it needs calibration. ",
    imgCols: "6",
    content: (
      <div>
      <h2>Mechanical and Balance Calibration Services</h2>
        <p>
          APS performs NIST traceable ISO 17025 sensor calibrations that can be serviced on-site or via overnight to our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly calibrate include digital force gauge, load cell, balance, vernier caliper, height gauge, torque wrench, torque analyzer, torque tester, torque screwdriver, and manometer. <strong>Torque wrench calibration is a common request where we expedite service</strong>. Several applications of balance calibration, load cell calibration, torque calibration and sensor calibration involve our setting up an initial IOPQ process <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation" className="link-primary">qualification and validation</a>.
       </p>
        <h3>Types of mechanical and balance calibrations:</h3>
        <ul>
          <li>Load cell sensor calibration</li>
          <li>Vernier calipers</li>
          <li>NIST calibrations</li>
          <li>Torque wrench calibration</li>
          <li>Height gauge</li>
          <li>Manometers</li>
          <li>Digital force gauge</li>
          <li>Torque analyzers / torque testers</li>
          <li>Torque screwdriver calibration services</li>
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
      <h2>Physical Dimensional Calibration Services</h2>
        <p>
APS performs NIST traceable ISO 17025 physical dimensional calibration of sensors in analytical lab and industrial settings. We can quickly accommodate on-site or equipment overnighted into our laboratory for rapid calibration and instrument turnaround. A sampling of instruments we regularly include dimensional calibrations covering range from calipers to micrometers to all manner of precison gages. APS is often requested to perform physical dimensional calibration of vernier caliper, height gauge, digital micrometer, and other precision instruments. APS calibration procedures for micrometers enable us to perform calibrations where there is no longer support by the OEM manufacturer and thereby extend the useful life. Once again, physical dimensional calibration is a common request where we expedite service! </p>
        <h3>Physical Dimensional Calibrations include:</h3>
        <ul>
          <li>Calipers calibration</li>
          <li>Micrometers calibration</li>
          <li>Dial test indicators calibration</li>
          <li>NIST calibrations</li>
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
APS performs NIST traceable ISO 17025 optical calibration of sensors in analytical lab and industrial settings. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid turnaround. We perform optical comparator calibration or calibration of the optical comparator calibration kit. We will provide optical level calibration, optical calibration, or optical NIST calibration services in general.
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
      <h2>Pipette Calibration Services</h2>
        <p>
APS performs NIST traceable ISO 17025 pipette calibration services on all manor of pipettes whether they are a single channel pipette,  multichannel pipette, digital pipette, or repeat pipette. Manufacturers we calibrate regularly are Rainin, Eppendorf, Hamilton, Gilsons, Thermo Fisher Scientific, and Mettler-Toledo,. We can accommodate equipment overnighted into our laboratory for rapid calibration / instrument turnaround. Our pipette calibration services include the calibration of pipette diluters.
      </p>
        <h3>Types of pipette calibrations:</h3>
        <ul>
          <li>Pipette calibration services</li>
          <li>Pipette diluters</li>
          <li>Rainin pipette calibration</li>
          <li>Eppendorf pipette calibration</li>
          <li>NIST calibrations</li>
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
      <h2>Temperature Calibration Services</h2>
        <p>
APS performs <a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">NIST traceable ISO 17025 thermometer calibration</a> in laboratory and industrial process settings. <strong>We can quickly accommodate equipment overnighted into our laboratory for rapid instrument calibration and turnaround</strong>. We perform digital and glass thermometer calibration on a range of applicatons that also include humidity calibration. Many of these applications include datalogger calibration and thermometer calibration. Several applications of thermometer calibration and humidity calibration require us to set up an initial IQ OQ PQ process qualification and <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation" className="link-primary">validation</a>.
      </p>
        <h3>Types of temperature calibration:</h3>
        <ul>
          <li>Temperature probes and thermocouple calibration</li>
          <li>Digital and glass thermometers</li>
          <li>Humidity sensor calibration</li>
          <li>Infrared thermometer calibration</li>
          <li>Data logger calibration certificate</li>
          <li>Thermometer calibration log</li>
          <li>Thermal mass flow calibration</li>
          <li>NIST calibrations</li>
        </ul>
              <p>More information about <a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Advanced Temperature Calibrations</a>.
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
    question: "What does NIST traceable mean?",
    answer: "National Institute of Standards and Technology standard historical recordkeeping on equipment. This is an unbroken chain of our standard calibrations traceable back to NIST. In conjunction with this, we can provide cradle to grave traceabiltiy over the equipment lifetime. APS specializes in NIST calibrations. "
  },
  {
    question: "Who is ANAB?",
    answer: "The ANSI National Accreditation Board (ANAB) is a non-governmental organization that provides accreditation services and training to public- and private-sector organizations. "
  },
    {
    question: "What is IQ OQ PQ validation?",
    answer: "Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualificaton (PQ) refers to establishing and documenting a process to test new instruments after initial installation in the conditions they operate in, and to the standards that they can be expected to perform to. "
  },
  {
    question: "Does APS provide calibrations near me?",
    answer: "We provide on-site advanced calibrations throughout the United States and Canada as well as centralized instrument calibration through our laboratories in Pleasanton, California and St. Petersburg, Florida."
  },
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Advanced Calibrations FAQs - Frequently Asked Questions about NIST Calibrations" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
