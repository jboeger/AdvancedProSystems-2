import * as React from "react";
import { Hero } from "../components/homePage/Hero";
import imgSection1 from "../images/hero-portrait-02.jpg";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import { Layout } from "../components/Layout";

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
  
    <h3>Advanced Process Systems Corp. - West Coast</h3>
    <p>44 La Encinal<br />
    Building 2<br />
    Orinda, CA 94563</p>
    <h3>Advanced Process Systems Corp. - East Coast</h3>
    <p>Opening Fall 2024<br />
    Greater Boston<br /><br />
    We also provide services in the field across the U.S.A.</p>
    </div>
  )
};

const AboutPage = () => {
  return (
    <Layout>
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
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
