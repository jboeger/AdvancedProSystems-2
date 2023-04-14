import * as React from "react";
import { Hero } from "../components/homePage/Hero";
import imgSection1 from "../images/hero-portrait-02.jpg";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import { Layout } from "../components/Layout";

const metaData = {
  title: "About APS | We optimize your bioprocessing | Advanced Pro Systems",
  description: "APS helps OPTIMIZE your BIOPROCESSING. Since 2017 and with 30+ years experience, APS helps with all stages of process from installation and  calibration to integration.",
  canonicalUrl: "https://www.advancedprosystems.com/about",
  img: "https://www.advancedprosystems.com/static/hero-portrait-02-a8eec82e283dca7ad12df0a9b4b16a86.jpg",
  imgAlt: "",
  imgWidth: "900", 
  imgHeight: "1200",
  imgType: "image/jpg"
}

const content = {
  section1: (
    <div>
      <h2>APS helps optimize your bioprocesses in the laboratory and in the plant.</h2>
      <p>
        APS was founded in 2017 with 35+ years experience providing installation, calibration, and integration services.
      </p>
      <p>
        Our systems are designed for scalability across platforms to optimize and control our customers’ bio processes. 
        Through our expertise in instrumentation, <a href="https://www.advancedprosystems.com/services/calibrations" title="Advanced Calibration Services" className="link-primary">calibration</a> and maintenance, we design, build, integrate, and modify systems that get you results quickly while effectively maintaining and managing with predictable expenditures and budget. 
        Customers rely on us to help keep their laboratory assets productive and rapidly scale their processes. 
        We do this by providing expertise in the design and optimization of your upstream and downstream processes, and then specifying the components and equipment that best help you achieve those goals.
      </p>
      <p>
        We do this in partnership with leaders in laboratory and industrial bioprocess instruments, sensors, software, and equipment.
      </p>
  
    <h3>APS - West Coast</h3>
    <p>6920 Koll Center Parkway<br />
    Suite 223<br />
    Pleasanton, CA 94566</p>
    <h3>APS - East Coast</h3>
    <p>654 Northmoor Ave. N<br />
    St. Petersburg, FL 33702<br /><br />
    We also provide services in the field across the U.S.A.</p>
    </div>
  )
};

const AboutPage = () => {
  return (
    <Layout metaData={metaData}>
      <Hero height="200px" img={heroImg} title="About Us" body="" marginBottom={padding} />
      <Section
        padding="40px"
        img={imgSection1}
        imgAlt=""
        imgSide="left"
        imgCols="7"
        content={content.section1}
      />
      <section style={{padding: "0 0 70px 0"}}>
        <div className="container-lg px-5">
          <h3>Tim Erisman | <a className="text-primary" href="https://www.linkedin.com/in/tim-erisman/">LinkedIn</a></h3>
          <p className="px-3">With over 30 years’ Business Development and Management in the Finance, Bioprocess Equipment, and Facilities Services Industries, Tim’s range of experience in working with universities, research organizations, government departments, startups, and Fortune 100 companies equips him with the understanding and skills to help individuals and companies navigate scaleup, development, and execution of your biotechnology business objectives so you can focus on developing your technologies.</p>
          <h3>Doug Willoughby | <a className="text-primary" href="https://www.linkedin.com/in/douglas-willoughby-b937b07/">LinkedIn</a></h3>
          <p className="px-3">After retiring from the United States Air Force in calibration, maintenance, and monitoring of Electronic Warfare Systems and having served in tours with the NSA and globally, Doug joined Genentech evaluating, calibrating, and providing next generation solutions for instrumentation monitoring and control of the clinical research and product filling areas. In 2003, he founded a calibration services business where he developed new procedures for calibration parameters in the process utility automation environment in process setup, installation, calibration, <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" className="link-primary">validation</a>, and qualification of systems. As necessary, he creates new IOPQ protocols for the initial Validation/Qualification of all manner of equipment and systems. In 2017, Doug founded Advanced Process Systems as an OEM partner for installation, validation, repair, and aftermarket warranty support.</p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
