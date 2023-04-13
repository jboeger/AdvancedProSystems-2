import * as React from "react";
import { Hero } from "../components/homePage/Hero";
import { CardGroup } from "../components/homePage/CardGroup";
import { CredentialGroup } from "../components/homePage/CredentialGroup";
import { FAQAccordian } from "../components/homePage/FAQAccordian";
import { Section } from "../components/Section";
import heroImg from "../images/hero-home-01a-big.jpg";
import { Layout } from "../components/Layout";
import card1Img from "../images/card1-gears-02.jpg";
import card2Img from "../images/card2-lab-02.jpg";
import card3Img from "../images/card3-stainless-02.jpg";

export const padding = "40px";

const metaData = {
  title: "Advanced Pro Systems Corp | Complete Bioprocessing Service Solutions",
  description: "APS provides complete service solutions for your bioprocessing needs, whether upstream or downstream... lab scale, pilot plant, or industrial. Our focus is SERVICE and best optimizing your bioprocesses.",
  canonicalUrl: "https://www.advancedprosystems.com",
  img: "https://www.advancedprosystems.com/static/hero-home-01a-big-bcdf49ad1d926b6cb410bdf5b82ea7c3.jpg",
  imgAlt: "",
  imgWidth: "1840", 
  imgHeight: "814",
  imgType: "image/jpg"
}

const cards = [
  {
    title: "Process Consulting and Calibration",
    body: "",
    img: card1Img,
    imgAlt: "",
    link: "/services/calibrations"
  },
  {
    title: "Laboratory, Industrial Service Plans",
    body: "",
    img: card2Img,
    imgAlt: "",
    link: "/services"
  },
  {
    title: "Biotech Equipment and Parts",
    body: "",
    img: card3Img,
    imgAlt: "",
    link: "/products"
  }
];

const credentialCards = [
  {
    title: "cGMP trained and fully qualified.",
    text: "FDA Good Manufacturing Practice regulation compliant."
  },
  {
    title: "ISO/IEC 17025:2017 Compliant",
    text: "Laboratory and Industrial scale consistency, quality and reliability."
  },
  {
    title: "NIST traceable",
    text: "All Advanced Process Systems calibrations and validations are NIST traceable."
  },
  {
    title: "Validations: IOPQ Install, Operate & Process Qualify",
    text: "Temp mapping, autoclaves, incubators, cold rooms."
  }
];

const content = {
  section1: (
    <div>
      <h2>Why choose Advanced Processing Systems?</h2>
      <p>
        Advanced Process Systems Corp is dedicated to provide professional services for
        installations, calibrations, and validations of major systems, to include GMP, process
        systems and lab equipment. We are factory trained and qualified by companies such as
        Sonotec, Hamilton, BlueSens and SecureCell.
      </p>
    </div>
  ),
  section2: (
    <div>
      <h2>Prompt. Reliable. Honest. Professional.</h2>
      <p>
        You can depend on our engineers to provide quality service and be confident that your
        equipment is <a href="https://www.advancedprosystems.com/services/calibrations/" className="link-primary" title="Advanced Calibration Services">calibrated</a> and <a href="https://www.advancedprosystems.com/services/iq-oq-pq-validation/" className="link-primary" title="Advanced IQ OQ PQ Validation and Equipment Qualification">validated</a> accurately.
      </p>
    </div>
  ),
};

const HomePage = () => {
  return (
    <Layout 
      metaData={metaData}
      footerBgColor="rgb(255, 255, 255, .5)"
    >
      <Hero
        height="400px"
        img={heroImg}
        title="Advanced Processing Systems - Complete Bioprocessing Service Solutions"
        body="We provide complete service solutions for your bioprocessing needs."
      />
      <CardGroup cards={cards} bgColor="rgb(230, 255, 253, .2)" imgHeight="200px" />
      <Section
        bgColor="rgb(255, 255, 255, .5)"
        img={heroImg}
        imgAlt=""
        imgSide="left"
        imgCols="7"
        content={content.section1}
      />
      <CredentialGroup credentialCards={credentialCards} bgColor="" height="400px" />
      <Section
        bgColor="rgb(255, 255, 255, .5)"
        img={heroImg}
        imgAlt=""
        imgSide="right"
        imgCols="7"
        content={content.section2}
      />
    </Layout>
  );
};

export default HomePage;
