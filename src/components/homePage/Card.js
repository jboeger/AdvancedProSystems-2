import * as React from "react";
import { useViewport } from "../Layout";
import "./Card.css";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function Card(props) {
  const { width } = useViewport();
  const breakpoint = 768;
  return (
    <a href={props.link}>
      <div className="card border-0 " style={{ background: "", cursor: "pointer"}} >
        <img
          src={props.img}
          alt="yo"
          className="card-img-top"
          style={{ objectFit: "cover", height: props.imgHeight }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">{props.body}</p>
          {props.noButton ? null : (
            <button
              href="/something"
              className="btn btn-primary"
              style={{ background: "rgb(55, 105, 204)" }}
            >
              Go somewhere
            </button>
          )}
        </div>
      </div>
    </a>
  );
}
