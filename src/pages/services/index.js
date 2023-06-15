import * as React from "react";
import { Layout } from "components/Layout";
import { Hero } from "components/homePage/Hero";
import { Section } from "components/Section";
import { SectionChain } from "components/SectionChain";
import heroImg from "images/hero-home-01a-big.jpg";
import padding from "pages/index";
import imgSection2 from "images/hero-lab-02.jpg";

const metaData = {
  title: "Lab + Industrial | Biotech + Bioprocessing Services | APS",
  description: "APS provides expertise and on-site services for upstream bioprocessing, downstream bio processing, calibration, and validation. We provide service plans for all scales: from lab scale to pilot plant to industrial scale.",
  canonicalUrl: "https://www.advancedprosystems.com/services/",
  img: "https://www.advancedprosystems.com/static/hero-lab-02-60291c3bc807bec062f755de596e5344.jpg",
  imgAlt: "Photo of bioreactor requiring IQ OQ PQ validatin and calibration. ",
  imgWidth: "800",
  imgHeight: "532",
  imgType: "image/jpg"
}

const sections = [
  {
    img: imgSection2,
    imgAlt: "",
    imgCols: "6",
    content: (
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
              <a href="https://www.advancedprosystems.com/services/calibrations/" title="Calibration" className="link-primary">Calibration</a>
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
    )
  },
];

const ServicesPage = () => {
  return (
    <Layout metaData={metaData}>
      <Hero
        height="200px"
        img={heroImg}
        title="Services and Support"
        body=""
        marginBottom={padding}
      />
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
            <h3><a href="https://www.advancedprosystems.com/services/calibrations/" className="link-primary" title="Advanced Calibration Services">Advanced Calibration Services</a></h3>
            <ul>
            <li><a href="https://www.advancedprosystems.com/services/electrical-calibration/" className="link-primary" title="Electrical Calibration">Electrical, Multimeters</a></li>
              <li><a href="https://www.advancedprosystems.com/services/flow-sensor-calibrations/" className="link-primary" title="Flow Sensor Calibrations">Flow - Gas, Liquid, Fluid</a></li>
                <li><a href="https://www.advancedprosystems.com/services/lab-calibrations/" className="link-primary" title="Lab Calibrations">Lab Calibrations</a></li>
              <li>Mechanical and Balance</li>
              <li>Optical</li>
              <li>Physical Dimensional</li>
              <li><a href="https://www.advancedprosystems.com/services/pipette-calibration/" className="link-primary" title="Pipette Calibration">Pipette Calibration</a></li>
              <li><a href="https://www.advancedprosystems.com/services/pressure-calibration/" className="link-primary" title="Pressure Gauge Calibration">Pressure Gauge Calibration</a></li>
              <li><a href="https://www.advancedprosystems.com/services/temperature-calibration/" className="link-primary" title="Temperature Calibration">Temperature, Thermometers</a></li>
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
            <h3 className="h4"><a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" className="link-primary" title="IQ OQ PQ Validation">IQ OQ PQ Validation</a></h3>
            <ul>
              <li>IOQ generation</li>
              <li>Execution</li>
              <li>Reports</li>
              <li>More about <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" title="IQ OQ PQ Validation services" className="link-primary">IQ OQ PQ Validation</a></li>
            </ul>
          </div>
        </div>
      </div>
      <a id="services_2" />
      <SectionChain content={sections} />
    </Layout>
  );
};

export default ServicesPage;
