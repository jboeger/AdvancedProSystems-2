import * as React from "react";
import { Hero } from "../components/homePage/Hero";
import { PeopleNoImages } from "../components/aboutPage/PeopleNoImages";
import imgSection1 from "../images/hero-portrait-02.jpg";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import { Layout } from "../components/Layout";

const metaData = {
  title: "About APS | We optimize your bioprocessing | Advanced Pro Systems",
  description: "APS helps OPTIMIZE your BIOPROCESSING. Since 2017 and with 30+ years experience, APS helps with all stages of process from installation and  calibration to integration.",
  canonicalUrl: "https://www.advancedprosystems.com/about/"
}

const content = {
  section1: (
    <div>
      <h2>APS helps optimize your bioprocesses in the laboratory and in the plant</h2>
      <p>
        APS was founded in 2017 with 35+ years experience providing installation, calibration, and integration services.
      </p>
      <p>
        Our systems are designed for scalability across platforms to optimize and control our customers’ bio processes. 
        Through our expertise in instrumentation, calibration and maintenance, we design, build, integrate, and modify systems that get you results quickly while effectively maintaining and managing with predictable expenditures and budget. 
        Customers rely on us to help keep their laboratory assets productive and rapidly scale their processes. 
        We do this by providing expertise in the design and optimization of your upstream and downstream processes, and then specifying the components and equipment that best help you achieve those goals.
      </p>
      <p>
        We do this in partnership with leaders in laboratory and industrial bioprocess instruments, sensors, software, and equipment.
      </p>
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
      <PeopleNoImages/>
    </Layout>
  );
};

export default AboutPage;
