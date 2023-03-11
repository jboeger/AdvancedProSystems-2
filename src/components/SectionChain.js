import * as React from "react";
import { Section } from "./Section.js";

export function SectionChain(props) {
  return props.content.map((sectionProps, idx) => {
    let imgSide, bgColor;
    if (idx % 2 == 0) {
      imgSide = "right";
      bgColor = "rgb(255,255,255,0)"
    }
    else {
      imgSide = "left";
      bgColor = "rgb(255,255,255,0.3)"
    }
    return <Section key={idx} imgSide={imgSide} bgColor={bgColor} {...sectionProps} />
  }) 
}