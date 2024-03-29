import * as React from "react";
import { useViewport } from "./../Layout";
//import "bootstrap";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function Hero(props) {
  const { width } = useViewport();
  const breakpoint = 768;
  const desktop = (
    <div
      className=""
      style={{
        height: props.height,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="container-sm text-light text-center"
        style={{
          height: "100%",
          paddingTop: "100px",
        }}
      >
        <h1 style={{ paddingBottom: "20px" }} className="fw-bolder">
          {props.title}
        </h1>
        <p className="fw-light" style={{fontSize: "27px"}}>{props.body}</p>
      </div>
    </div>
  );

  const mobile = (
    <div
      className=""
      style={{
        height: props.height,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="container-sm text-light"
        style={{
          height: "100%",
          paddingTop: "100px",
        }}
      >
        <h1 style={{ paddingBottom: "20px" }} className="">
          {props.title}
        </h1>
        <p className="fw-light">{props.body}</p>
      </div>
    </div>
  );

  return <section>{width < breakpoint ? mobile : desktop}</section>;
}
