import * as React from "react";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import { Layout } from "components/Layout";
// import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { FAQ } from "components/homePage/FAQ";

// image imports
import heroHomeImg from "images/hero-home-01a-big.jpg";
import validationprocess from "images/validation-process.jpg";

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
    img: validationprocess,
    imgAlt: "Thermometer data logger. ",
    imgCols: "6",
    content: (
      <div>
        <h1>Advanced IQ OQ PQ Validation and Equipment Qualification</h1>
        <p>
           Advanced Process Syestems provides the highest level of validation and equipment qualification services available for the laboratory, industrial processing, pharmaceutical, food and beverage manufacturing, petrochemical, and all standards dependent industries. 
        </p>
      <p>
      APS uses the most <a href="https://www.advancedprosystems.com/services/calibrations/" title="Advanced Calibrations main page" className="link-primary">advanced calibration</a> standards such as Kaye Advanced Validation System (AVS) for IQ OQ PQ validation of procesess requiring equipment qualification. We will provide the full range of services up to full validation in temperature mapping of chambers, freezers, incubators, ovens, and cold rooms. 
      </p>
      <p>
      From calibration raw data to full ISO 17025 compliant calibration while maintaining the results in our CFR 21 Part 11 compliant database audited by ANSI accredited auditors (through ANAB accreditation services), APS provides full IQ OQ PQ validation and calibration services using the Kaye AVS System IQ OQ PQ protocols. Customers include the range from start-ups to most established biopharma, biotech, and biomedical equipment companies to US national laboratories, and food and beverage companies with the most stringent calibration requirements. 
      </p>
      <p>
      APS works with the full range of requirements from individual calibrations, supplying calibration personnel, OEM calibration services, to setting up the processes for entire metrology departments. In some cases, we provide calibration facilities management.
      </p>
      </div>
    )
  },
    {
    content: (
      <div>
        <h2>Advanced IQ OQ PQ Validation Division</h2>
        <p>
          With our state of the art KAYE AVS systems we can provide all of your:
        </p>
        <ul>
          <li>IQ OQ PQ testing.</li>
          <li>Create and customize protocols for your company's requirements.</li>
          <li>Follow and test your company's internal Protocols.</li>
          <li>Can provide temperature mapping.</li>
        </ul>
        <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for Advanced IQ OQ PQ Validation services. </mark>
        </p> 
      </div>
    )
  },
  {
    content: (
      <div>
        <h2>Equipment Qualification</h2>
        <p>
          APS can create initial protocols or execute existing protocols from simplified to advanced requirements to assist customers equipment qualification or process requirements. Advanced Validation Services can provide comprehensive calibration to validation as "one stop shop" for your equipment qualification requirements.
        </p>
      <h3>Freezers</h3>
      <p>Full freezer temperature mapping, calibration, and validation protocol execution. </p>
      <h3>Refrigerators</h3>
      <p>Full refrigerator temperature mapping, calibration, and validation protocol execution.</p>
      <h3>Cold Rooms</h3>
      <p>Full cold room temperature mapping, calibration, and validation protocol execution.</p>
      <h3>Incubators</h3>
      <p>Incubator temperature mapping, calibration, and validation protocol execution.</p>
      <h3>Bioreactors</h3>
      <p>Full system calibration and validation protocol execution.</p>
      <h3>Tangental Flow Filtration Systems (TFF)</h3>
      <p>Full TFF system calibration, validation, and IQ OQ PQ qualification protocol execution.</p>
      <h3>Process Systems</h3>
      <p>Full process system calibration, validation, and IQ OQ PQ validation / qualification protocol execution.</p>
            <p>
          <mark> <a href="https://www.advancedprosystems.com/contact" title="Contact APS" className="link-primary">CONTACT APS</a> for Advanced Equipment Qualification services. </mark>
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
    question: "What is IQ OQ PQ validation protocol?",
    answer: "IQ OQ PQ validation protocol is a process used to validate equipment and systems in laboratory and industrial settings. IQ stands for Installation Qualification, OQ stands for Operational Qualification, and PQ stands for Performance Qualification. Installation Qualification (IQ) ensures that the equipment is installed correctly and meets the manufacturer's specifications. This includes verifying that all components are present, that the equipment is properly installed, and that it meets safety requirements. Operational Qualification (OQ) ensures that the equipment operates as intended and meets the user's requirements. This includes testing the equipment under normal operating conditions and verifying that it meets performance specifications. Performance Qualification (PQ) ensures that the equipment consistently performs as intended over time. This includes testing the equipment under a range of conditions and verifying that it meets performance specifications over an extended period. Overall, IQ OQ PQ validation protocol is an important process to ensure that laboratory and industrial equipment and systems are reliable, accurate, and safe to use."
  }
]

const CalibrationsPage = () => {
  return (
    <Layout 
      footerBgColor="rgb(255,255,255,.2)"
    >
      <SectionChain content={sections}/>
      <FAQ title="Calibrations FAQs - Frequently Asked Questions" content={faqContent} />
    </Layout>
  );
};

export default CalibrationsPage;
export { Head } from "../../components/Head.js";

