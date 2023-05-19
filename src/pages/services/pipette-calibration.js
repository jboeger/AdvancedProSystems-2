import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import singlechannelpipette from "images/manual-single-channel-pipette.jpg";
import handler24 from "images/automated-liquid-handler-24-well.jpg";
import peristalticpumps from "images/peristaltic-pumps.jpg";
import singlechannelpipette2 from "images/manual-pipette-single-channel.jpg";
import manualmultipipette from "images/manual-multichannel-pipette.jpg";
import handler962 from "images/automated-liquid-handler-96-well-2.jpg";
import labreactors from "images/laboratory-reactors.jpg";
import multichannelpipette from "images/manual-multi-channel-pipette.jpg";
import handler96 from "images/automated-liquid-handler-96-well.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Pipette Calibration | Thermometer, Hygrometer",
  description: "APS provides Advanced Temperature Calibration Services for hygrometers, digital + analog thermometers, thermocouples, thermal analysis calibration and more!",
  canonicalUrl: "https://www.advancedprosystems.com/services/pipette-calibration/",
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
    img: handler24,
    imgAlt: "Thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced Pipette Calibration Services</h1>
        <p>
           Advanced Process Systems offers both manual and automated, single and multi-channel pipette calibration services. APS will perform pipette calibration on site or in our pipette calibration lab. APS will provide a NIST pipette calibration certificate to the standards you select.
        </p>
      <div class="list-group-wrapper">
      <h3><a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">Advanced Calibrations - Main</a></h3>

      <ul>
      <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" title="Electrical Calibration" className="link-primary">Electrical, Multimeters</a></li>
      <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" title="Flow Sensor Calibration" className="link-primary">Flow Rate - Gas, Fluid, Liquid</a></li>
      <li>Mechanical and Balance</li>
      <li>Optical</li>
      <li>Physical Dimensional</li>
      <li><strong>Pipette Calibration</strong></li>
      <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" title="Pressure Calibration" className="link-primary">Pressure Gauge Calibration</a></li>
      <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" title="Temperature Calibration" className="link-primary">Temperature / Thermometers</a></li>
      </ul>
      </div>
      </div>
    )
  },
    {
    img: singlechannelpipette2,
    imgAlt: "Placeholder. ",
    imgCols: "6",
    content: (
      <div>
        <h2>NIST Pipette Calibration Services</h2>
        <p>
          On automated liquid handlers, APS offers NIST calibration certificates as well as preventive maintenance on well known brands such as Hamilton, Beckman, and Tecan. We also offer pipette tips that are NIST certified to work with Rainin, Eppendorf, Hamilton, Beckman, and Tecan. If your pharma process requires ISO 17025 compliance, APS is compliant to those standards as well.
        </p>
      <p>
          As a premium service, APS can provide a 24 hour service for pipette calibrations. APS performs on-site pipette calibration services for automated liquid handlers as well manual pipettes. APS regularly performs Rainin pipette calibration, Eppendorf pipette calibration and all manual or multichannel pipettes.
        </p>
        <p>
          <mark> Need overnight pipette calibration? <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for rapid pipettes calibration turnaround. </mark>
        </p> 
      </div>
    )
  },
  {
    img: handler962,
    imgAlt: "placeholder. ",
    imgCols: "6",
    content: (
      <div>
        
      <p>
    Our highly adaptable on-site calibration services include comprehensive lab pipette calibration or pre-certification of pipette tips as needed. Leveraging years of accumulated expertise, our meticulously trained technicians are prepared to conduct pipette calibrations either at your facility or within our specialized pipette calibration laboratory.
      </p>
      <ul>
      <li>APS offers service levels tailored to your specific operational procedures to the level of accuracy and precision your require.</li>
      <li>NIST traceable calibrations certificates provided.</li>
      <li>ISO 17025 accredited calibration service available.</li>
      <li>We support your preventative maintenance protocols as requested.</li>
      <li>Where exacting standards and quality are required, we specialize in providing calibrations for customers in biotechnology, biopharma, chemistry, life sciences, educational laboratories, research labs, forensic laboratories among others.</li>
      <li>Our Advanced Calibration Services are meticulously designed to mitigate disruptions to your operations, offering swift turnaround times and proficient services of unrivaled quality. As a highly-regarded partner, we deeply appreciate the significance of pipettes in our clients' operational ecosystem and remain committed to exceeding their expectations.</li>
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
    question: "No questions yet... please contact us and ask!",
    answer: "."
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Pipette Calibration FAQs - Frequently Asked Questions about Thermometer Calibrations" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
