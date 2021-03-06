import * as React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import imgSection1 from "../images/random2.jpg";
import imgSection2 from "../images/hero-lab-02.jpg";
import imgSection3 from "../images/card1-01a.jpg";

const metaData = {
  title: "Lab + Industrial | Biotech + Bioprocessing Services | Advanced Pro Systems",
  description: "APS provides expertise and on-site services for upstream bioprocessing, downstream bio processing, calibration, and validation. We provide service plans for all scales: from lab scale to pilot plant to industrial scale."
}

const content = {
  section1: (
    <div>
      <h2>Process Consulting and Calibration</h2>
      <h3>Upstream Process Consulting</h3>
      <ul>
        <li>Bioreactor specification</li>
        <li>Sensors, Sampling solutions</li>
        <li>Automation</li>
        <li>Integration</li>
      </ul>
      <h3>Downstream Process Consulting</h3>
      <ul>
        <li>Filtration</li>
        <li>Chromatography</li>
        <li>Separations</li>
        <li>Drying</li>
      </ul>
      <h3>Calibration –instruments measuring</h3>
      <ul>
        <li>Temperature</li>
        <li>Pressure</li>
        <li>Flow</li>
        <li>Mass</li>
        <li>Optical</li>
        <li>Volumetric</li>
        <li>Dimensional</li>
      </ul>
      <h3>NIST traceable “cradle to grave” calibration</h3>
      <ul>
        <li>Performance</li>
        <li>Logging</li>
        <li>SOPs</li>
        <li>Records management</li>
      </ul>
      <h3>Validation – IOQ generation, execution and reports</h3>
    </div>
  ),
  section2: (
    <div>
      <h2>Laboratory, Industrial Service Plans</h2>
      <div className="p-4">
        <p>
          OEM Post Sale Services Management
        </p>
        <ul>
          <li>
            Installation
          </li>
          <li>
            Calibration
          </li>
          <li>
            Integration
          </li>
          <li>
            On-site services
          </li>
          <li>
            Mail-in or Remote Service Center repairs
          </li>
          <li>
            Warranty Record and Services Management
          </li>
        </ul>
        <p>
          Laboratory/Plant - automation, integration and maintenance
        </p>
        <p>
          Labor Services - field and contract service
        </p>
      </div>
    </div>
  ),
};

const ServicesPage = () => {
  return (
    <Layout 
      metaTitle={metaData.title}
      metaDescription={metaData.description}
    >
      <Hero
        height="200px"
        img={heroImg}
        title="Services and Support"
        body=""
        marginBottom={padding}
      />
      {/* <Section
        padding="40px"
        img={imgSection1}
        imgSide="left"
        imgCols="7"
        content={content.section1}
      /> */}
      <div className="container-lg my-4">
        <h2>Process Consulting and Calibration</h2>
        <div className="row justify-content-center pt-4">
          <div className="col-sm-4">
            <h3 className="h4">Upstream Process Consulting</h3>
            <ul>
              <li>Bioreactor specification</li>
              <li>Sensors, Sampling solutions</li>
              <li>Automation</li>
              <li>Integration</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3 className="h4">Downstream Process Consulting</h3>
            <ul>
              <li>Filtration</li>
              <li>Chromatography</li>
              <li>Separations</li>
              <li>Drying</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3 className="h4">Calibration – instruments measuring</h3>
            <ul>
              <li>Temperature</li>
              <li>Pressure</li>
              <li>Flow</li>
              <li>Mass</li>
              <li>Optical</li>
              <li>Volumetric</li>
              <li>Dimensional</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h3 className="h4">NIST traceable “cradle to grave” calibration</h3>
            <ul>
              <li>Performance</li>
              <li>Logging</li>
              <li>SOPs</li>
              <li>Records management</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3 className="h4">Validation</h3>
            <ul>
              <li>IOQ generation</li>
              <li>Execution</li>
              <li>Reports</li>
            </ul>
          </div>
        </div>
      </div>
      <a id="services_2" />
      <Section
        padding="40px"
        img={imgSection2}
        imgSide="right"
        imgCols="7"
        content={content.section2}
      />
    </Layout>
  );
};

export default ServicesPage;
