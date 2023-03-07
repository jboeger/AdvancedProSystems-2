import * as React from "react";
import { CredentialCard } from "./CredentialCard";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function CredentialGroup(props) {
  return (
    <section style={{ background: props.bgColor, padding: "70px 0 70px 0" }}>
      <div className="container-lg">
        <div
          className="row align-items-center"
          style={{ paddingTop: props.padding, paddingBottom: props.padding }}
        >
          <div className="col">
            <div className="row gy-3">
              {props.credentialCards.map((card) => (
                <div className="col-6">
                  <CredentialCard title={card.title} text={card.text}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
