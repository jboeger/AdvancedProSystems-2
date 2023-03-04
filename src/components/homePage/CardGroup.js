import * as React from "react";
//import "bootstrap";
import { useViewport } from "../Layout";
import { Card } from "./Card";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

//props: width of each card, height of the pic of each card

export function CardGroup(props) {
  const { width } = useViewport();
  const breakpoint = 768;

      // <Card
    //   title="Process Consulting and Calibration"
    //   body=""
    //   img={card1Img}
    //   imgAlt=""
    //   imgHeight={props.imgHeight}
    //   noButton
    // />,
    // <Card
    //   title="Laboratory, Industrial Service Plans"
    //   body=""
    //   img={card2Img}
    //   imgAlt=""
    //   imgHeight={props.imgHeight}
    //   noButton
    //   link="/services#services_2"
    // />,
    // <Card
    //   title="Biotech Equipment and Parts"
    //   body=""
    //   img={card3Img}
    //   imgAlt=""
    //   imgHeight={props.imgHeight}
    //   noButton
    // />

  const desktop = (
    <div className="container-xl">
      <div className="row">
        {props.cards.map((card, idx) => (
          <div className="col" key={idx}>
            <Card 
              title={card.title}
              body={card.body}
              img={card.img}
              imgAlt={card.imgAlt}
              imgHeight={props.imgHeight}
              noButton
            />
          </div>
        ))}
      </div>
    </div>
  );

  const mobile = (
    <div className="container">
      <div className="row gy-5 text-center">
        {props.cards.map((card, idx) => (
          <div className="col-12" key={idx}>
            <Card 
              title={card.title}
              body={card.body}
              img={card.img}
              imgAlt={card.imgAlt}
              imgHeight={props.imgHeight}
              noButton
            />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section style={{ background: props.bgColor, padding: "70px 0 70px 0" }}>
      {width > breakpoint ? desktop : mobile}
    </section>
  );
  return width > breakpoint ? desktop : mobile;
}
