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
import biopresser from "images/bioreactor-with-pressure-monitoring.jpg";

export const padding = "40px";

const metaData = {
  title: "Lab Calibration Services - Bioreactors, Gas Flow, Pipettes!",
  description: "APS performs NIST Traceable Calibration Services for labs: flow, pressure, pipette, balance, dimensional, thermal + electrical calibrations.",
  canonicalUrl: "https://www.advancedprosystems.com/services/lab-calibrations/",
  img: "https://www.advancedprosystems.com/static/card2-lab-02-7db6966a2a9bb67765e0da9404f0670b.jpg",
  imgAlt: "Close-up photo of laboratory scientist calibrating a bioreactor in a lab.",
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
    imgAlt: "Close-up photo of lab scientist working with a calibrated bioreactor. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Lab Calibration Services</h1>
        <p>
           APS delivers premium lab calibration services adhering to the most rigorous industry standards. We perform precise calibrations to the most exacting specifications and, upon request, retain these data from NIST calibrations in our secure, regularly audited database. 
        </p>
        <p>
           Our calibration processes are ANSI accredited via ANAB accreditation services. We provide ISO 17025 compliant documentation and adhere to standards required for FDA compliance. Furthermore, we offer <strong>comprehensive calibration compliance tracking from initiation to completion</strong>, ensuring unbroken oversight throughout the process.
        </p>

          <p>
Customers include the range from start-ups to the most established biopharma, biotech, and biomedical equipment companies to US national laboratories, chemical, and food and beverage companies with the most stringent calibration standards. APS works with the full range of requirements from individual calibrations, more exacting custom standards, supplying calibration personnel and OEM calibration services to setting up the processes for entire metrology departments. In some cases, we provide comprehensive calibration facilities management.
      </p>
  <h2>Expedited Services and Overnight Calibrations</h2>
                <p>
In the event an <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation" className="link-primary">IQ OQ PQ validation</a> is necessary, APS can expedite the process with all the necessary calibrations. Whether the IQ/OQ/PQ validation SOP needs to be written from scratch or a pre-approved package needs to be strictly adhered to, APS will provide the most efficient, timely, and cost effective solution.
      </p>
      </div>
    )
  },
    {
    img: biopresser,
    imgAlt: "Close-up photo of two pressure guages in a laboratory. ",
    imgCols: "6",
    content: (
      <div>
        <h2>Bioreactor Calibration</h2>
        <p>
          APS performs installation, maintenance, and repair on bioreactors that can range from basic confirmation of operation with specified parameters on the mass flow controllers, motors, agitation groups, peristaltic pumps, mass flow controllers, pH sensors, DO sensors, off-gas sensors, cell counters, viable cell sensors to the most highly documents NIST traceable ISO 17025 calibration standards in laboratory applications. 
        </p>
              <p>
          <strong>We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid fermentor calibration turnaround</strong>. A sampling of bioreactors we regularly calibrate are Sartorius, Eppendorf, Infors, Getinge (Applikon), KBiotech, Agilitech, Solaris, and Biostream-International. 
        </p>
      <h3>Automation and Single Use Bioreactors</h3>
              <p>
          On automated bioreactors we can confirm and validate manufactures' adherence to stated specifications. APS regularly performs installation, maintenance, and confirmation of operation within performance specifications while supplying NIST traceable documentation and data collection on single-use bioreactor systems. APS provides performance confirmation and calibration certificates on single-use consumable parts. 
        </p>
              <p>
          APS will perform this service to confirm the performance within standards of single use bioreactor components (example: single use sensors, single use bags, pipette tips, and tubing from OEM and secondary suppliers. APS calibrates and confirms the stated performance parameters on all principal operating styles of stirred-tank bioreactors, rocker bioreactors, air lift bioreactors, and fixed-bed bioreactors.
        </p>
      
        <h3>Bioreactors that we calibrate include:</h3>
        <ul>
          <li>Sartorius</li>
          <li>Eppendorf</li>
          <li>Beckman</li>
          <li>Cyteva</li>
          <li>Infors</li>
          <li>Getinge (Applikon)</li>
          <li>KBiotech</li>
          <li>Agilitech</li>
          <li>Ipratech Cytosis</li>
          <li>Solaris</li>
          <li>Biostream-International</li>
          <li>Parallel Systems</li>
          <li>Amber 250</li>
          <li>Biostat</li>
          <li>BioKook</li>
        </ul>
              <p>
          <mark> Need bioreactor calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for fast turnaround. </mark>
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
        <h3>Flow sensor calibration types include:</h3>
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
      <h2>Electronic Calibration Services</h2>
        <p>
APS performs NIST traceable ISO 17025 <a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">electrical meter calibration</a> in the lab. We can quickly accommodate on-site equipment or equipment overnighted into our laboratory for rapid electronic equipment calibration and turnaround. 
      </p>
              <p>
We regularly perform electrical calibration for lab equipment including: peristaltic pumps, agitation motors, and instrument communication interfaces.
      </p>
        <h3>Electronic Equipment calibration types OEM's include:</h3>
        <ul>
          <li>Peristaltic Pumps</li>
          <li>Quattroflow Pumps</li>
          <li>Syringe Pumps</li>
          <li>Metering Pumps</li>
          <li>Diaphragm Pumps</li>
          <li>Watson-Marlow</li>
          <li>Masterflex</li>
          <li>Fisher Scientific</li>
          <li>Cole Parmer</li>
      <li>Sigma-Aldrich</li>
      <li>Agilent</li>
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
      <h2>Scale, Load Cell, and Balance Calibration Services</h2>
        <p>
APS performs NIST traceable ISO 17025 sensor calibrations that can be serviced on-site or via overnight to our California laboratory for rapid calibration and instrument turnaround. 
       </p>
       <p>
Lab instruments we regularly calibrate and provide calibration certificates for include load cells, balances, and scales. Several applications of balance calibration, load cell calibration, torque calibration and sensor calibration involve our setting up an initial IQ OQ PQ process qualification and validation.
       </p>
        <h3>Types of Scale, Load Cell, and Balance Calibrations:</h3>
        <ul>
          <li>Load cell sensor calibration</li>
          <li>NIST calibrations</li>
          <li>Mettler-Toledo</li>
          <li>Kern</li>
          <li>Sartorius</li>
          <li>OHAUS</li>
          <li>A&D Weighing</li>
          <li>Adam Equipment</li>
          <li>Radwag</li>
      <li>Torbal</li>
      <li>Tree Scales</li>
        </ul>
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
APS performs NIST traceable ISO 17025 <a href="https://www.advancedprosystems.com/services/pipette-calibration/" title="Pipette Calibration" className="link-primary">pipette calibrations</a> on all manor of pipettes whether they are a single channel pipette,  multichannel pipette, digital pipette, or repeat pipette. Manufacturers we calibrate regularly include: Rainin, Eppendorf, Hamilton, Gilsons, Thermo Fisher Scientific, and Mettler-Toledo. <strong>We can accommodate equipment overnighted into our laboratory for rapid calibration / instrument turnaround</strong>. Our pipette calibration services include the calibration of pipette diluters.
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
APS performs NIST traceable ISO 17025 <a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">thermometer calibrations</a> in laboratory and industrial process settings. We perform digital and glass thermometer calibration on a range of applicatons that also include humidity calibration. Many of these applications include datalogger calibration and thermometer calibration. Several applications of thermometer calibration and humidity calibration require us to set up an initial IQ OQ PQ process qualification and <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation" className="link-primary">validation</a>.
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
              <p>More information about <a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Advanced Temperature Calibrations</a>. Yes -- we can accommodate rapid calibration turnaround! Overnight it to our lab in the SF Bay Area.
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
    question: " . ",
    answer: " . "
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Lab Calibration FAQs - Frequently Asked Questions about Lab Calibrations" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
