import * as React from "react";
import { Link } from "gatsby";
import logoImg from "../images/logo-advancedprosystems-02c.png"
import justify from "../images/justify.svg";
import x from "../images/x-lg.svg";
import { useViewport } from "./Layout";
import OffCanvas from "react-aria-offcanvas";
import { overlay, hamburger, navItem } from "./NavBar.module.css";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function NavBar(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const pages = [
    {
      name: "Home",
      url: "/" 
    },
    {
      name: "Services",
      url: "/services/"
    },
    {
      name: "Calibrations",
      url: "/services/calibrations/"
    },
        {
      name: "IQ OQ PQ Validation",
      url: "/services/iq-oq-pq-validation/"
    },
    {
      name: "Products",
      url: "/products/"
    },
    {
      name: "About" ,
      url: "/about/"
    }
  ]

  const navPills = (className) => (
    <ul className={className} >
      {pages.map(({name, url}, idx) => (
        <li key={idx} className="nav-item">
          <Link to={url} className="nav-link" activeClassName="active" aria-current="page">
            {name}
          </Link>
        </li>
      ))}
      <li
        className="nav-item border border-3 border-primary ms-2"
        style={{ borderRadius: "10px" }}
      >
        <Link to="/contact/" className="nav-link contact-link" activeClassName="active" aria-current="page">
          <strong>Contact</strong>
        </Link>
      </li>
    </ul>
  )

  const desktop = (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center py-2">
        <Link to="/" className="d-flex align-items-center me-md-auto text-decoration-none">
          <img className="bi me-2" height="100px" alt="Advanced Process Systems Corp logo" src={logoImg} />
        </Link>
        {navPills("nav nav-pills align-items-center")} 
      </div>
    </div>
  );

  const mobile = (
    <div className="container-lg">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-2">
        <Link to="/" className="d-flex align-items-center me-md-auto text-decoration-none">
          <img className="bi me-2" height="70px" alt="Advanced Process Systems Corp logo" src={logoImg} />
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button onClick={isOpen ? close : open} className={hamburger}>
              {isOpen ? <img height="30px" src={x} /> : <img height="40px" src={justify} />}
            </button>
            <OffCanvas
              style={{
                content: {
                  background: "white",
                  borderRadius: "5px",
                  marginTop: "85px",
                },
                overlay: {
                  backgroundColor: "rgb(0, 0, 0, 0.5)",
                },
              }}
              isOpen={isOpen}
              onClose={close}
              closeOnEsc
              position="right"
              height="200px"
            >
              <div className="" style={{ height: "100%" }}>
                {navPills("nav flex-column nav-pills")}
              </div>
            </OffCanvas>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor }}>{width < breakpoint ? mobile : desktop}</section>
  );
}
