import * as React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/homePage/Hero";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import sectionImg from "../images/hero-stainless-02.jpg";

const metaData = {
  title: "Biotech Equipment + Parts | Partner Brands | Advanced Pro Systems",
  description: "APS is a certified provider labware, gas analyzers, bioreactors, TFF, flow controllers, sampling and automation, custom tanks, and much more. Partners include Sonotec, Securecell, BlueSens and Chemglass Life Sciences.",
  canonicalUrl: "https://www.advancedprosystems.com/products",
  img: "https://www.advancedprosystems.com/static/hero-stainless-02-ed06e6dd8706fb934151e8bd8e3bafc5.jpg",
  imgAlt: "",
  imgWidth: "2000",
  imgHeight: "1330",
  imgType: "image/jpg"
}

const content = {
    section1: (
        <div>
            <h2>Strategic Partners</h2>
            <div className="p-4">
                <h3><a href="https://www.sonotecusa.com/">Sonotec</a></h3>
                <ul>
                    <li>Non-invasive flow meters sized from 0 mL/min to 140,000 mL/min.</li>
                    <li>Closed loop flow controllers</li>
                    <li>Complete NIST traceable calibrations on flow, bubble and level sensors</li>
                    <li>ISO/IEC 17025:2017 compliant</li>
                </ul>
                <h3><a href="https://www.bluesens.com/us/">BlueSens</a></h3>
                <ul>
                    <li>Full range of services on gas analyzers</li>
                    <li>Complete NIST traceable <a href="https://www.advancedprosystems.com/services/calibrations">calibrations</a> on gas analyzers</li>
                    <li>ISO/IEC 17025:2017 compliant</li>
                </ul>
                <h3><a href="https://hamiltoncompany.com/">Hamilton Instruments</a></h3>
                <ul>
                    <li>pH, DO, CO2 sensors</li>
                    <li>Conductivity sensors</li>
                    <li>Cell density sensors</li>
                </ul>
                <h3>Advanced Process Systems</h3>
                <ul>
                    <li>Bioreactors sized from 1L - 50,000L</li>
                    <li>Chromatography skids</li>
                    <li>TFF systems</li>
                </ul>
                <h3><a href="https://chemglass.com/">Chemglass Life Sciences</a></h3>
                <ul>
                    <li>Labware</li>
                    <li>Specialty/custom glass, machining solutions</li>
                </ul>
            </div>
        </div>
    )
}

const ProductsPage = () => {
    return (
        <Layout metaData={metaData}>
            <Hero
                height="200px"
                img={heroImg}
                imgAlt=""
                title="Biotech Equipment and Parts"
                body=""
                marginBottom={padding}
            />
            <Section
                padding="40px"
                img={sectionImg}
                imgAlt=""
                imgSide="right"
                imgCols="7"
                content={content.section1}
            />
        </Layout>
    )
}

export default ProductsPage;
