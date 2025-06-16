import * as React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/homePage/Hero";
import heroImg from "../images/hero-home-01a-big.jpg";
import padding from "./index";
import { Section } from "../components/Section";
import sectionImg from "../images/hero-stainless-02.jpg";

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
                    <li>Bioreactors sized from 1 L - 50,000 L</li>
                    <li>Chromatography skids</li>
                    <li>Tangential Flow Filtration (TFF) systems</li>
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
        <Layout>
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
export { Head } from "../components/Head.js";
