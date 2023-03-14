import * as React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";
import icon from "images/favicon.png";
import "./Layout.css";
import "../styles.scss";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

const viewportContext = React.createContext({});

export function Layout(props) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    if (window !== `undefined`) {
      setWidth(window.innerWidth);
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      <Helmet>
        <title>{props.metaData.title}</title>
        <meta name="title" content={props.metaData.title} />
        <meta name="description" content={props.metaData.description} />
        <link rel="canonical" href={props.metaData.canonicalUrl} />
        <link rel="icon" type="image/png" href={icon} />

        <meta property="og:site_name" content="Advanced Process Systems, Inc." />
        <meta property="og:title" content={props.metaData.title} />
        <meta property="og:description" content={props.metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.metaData.canonicalUrl} />

        <meta propery="og:image" content={props.metaData.img} />
        <meta property="og:image:alt" content={props.metaData.imgAlt} />
        { props.metaData.imgWidth ? 
          <meta property="og:image:width" content={props.metaData.imgWidth} /> : null
        }
        { props.metaData.imgHeight ? 
          <meta property="og:image:height" content={props.metaData.imgHeight} /> : null
        }
        { props.metaData.imgHeight ? 
          <meta property="og:image:type" content={props.metaData.imgType} /> : null
        }
      </Helmet>
      <div className="wrapper">
        <header className="sticky-top">
          <NavBar bgColor="rgb(255,255,255,.95)" />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer bgColor={props.footerBgColor} />
        </footer>
      </div>
    </viewportContext.Provider>
  );
}

export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  return { width };
};
