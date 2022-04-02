import * as React from "react";
import blank_person from "./../../images/blank_person.png";
import { Card } from "../homePage/Card";
const bootstrap = typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null

export function PeopleNoImages(props) {
  return (
    <section style={{padding: "0 0 70px 0"}}>
      <div className="container-lg px-5">
        <h3>Tim Erisman | <a className="text-primary" href="https://www.linkedin.com/in/tim-erisman/">LinkedIn</a></h3>
        <p className="px-3">With over 30 years’ Business Development and Management in the Finance, Bioprocess Equipment, and Facilities Services Industries, Tim’s range of experience in working with universities, research organizations, government departments, startups, and Fortune 100 companies equips him with the understanding and skills to help individuals and companies navigate scaleup, development, and execution of your biotechnology business objectives so you can focus on developing your technologies.</p>
        <h3>Doug Willoughby | <a className="text-primary" href="https://www.linkedin.com/in/douglas-willoughby-b937b07/">LinkedIn</a></h3>
        <p className="px-3">After retiring from the United States Air Force in calibration, maintenance, and monitoring of Electronic Warfare Systems and having served in tours with the NSA and globally, Doug joined Genentech evaluating, calibrating, and providing next generation solutions for instrumentation monitoring and control of the clinical research and product filling areas. In 2003, he founded a calibration services business where he developed new procedures for calibration parameters in the process utility automation environment in process setup, installation, calibration, qualification of systems. As necessary, he creates new IOPQ protocols for the initial Validation/Qualification of all manner of equipment and systems. In 2017, Doug founded Advanced Process Systems as an OEM partner for installation, validation, repair, and aftermarket warranty support.</p>
        <h3>Andy Louwagie | <a className="text-primary" href="https://www.linkedin.com/in/andy-louwagie-a587363/">LinkedIn</a></h3>
        <p className="px-3">Andy has 20+ years in the agricultural, chemical, and biochemical industries, on-time and in budget for novel processes across project lifecycles from conceptual development through routine operations. He has performed the roles of Operations Engineer, Project Engineer, Process Development Engineer, Process Startup Implementation Lead, Process Engineering Design Lead, Semi-works Plant Manager, Training Program and Procedure Creation for Operators, Controls Administrator, Custom Manufacturing Liaison and Technology Transfer, Engineering Manager, Engineering Safety Leader (Design, HAZOP, PSM, Risk Mitigation, Review),  and Senior Process Engineer where teamwork and safety are always integral deliverables.</p>
        <p className="px-3">He has specific expertise in the creation, development, design, and optimization of the following processes and operations: Biomass Hydrolysis, Esterification, Transesterification, Ketalization, Oxidation, and Fermentation. In these areas, he has impactfully executed process development and data acquisition for engineering design, process simulation (Aspen Plus, Spreadsheet, Empirical Statistical), Kilo lab, Pilot, Semi-Works, and commercial design/scenario evaluation, client-defined terminology and stages for front end loading and FEED packages, thermochemical and bioreactor design, distillation, evaporation, drying (indirect viscous, spray), liquid-liquid separations (Adsorption, Extraction), and solid-liquid separations (Centrifugation, Membrane Separations)</p>
      </div>
    </section>
  );
}
