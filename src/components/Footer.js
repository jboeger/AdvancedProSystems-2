import * as React from "react";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function Footer(props) {
  return (
    <section style={{ background: props.bgColor }}>
      <div className="container-lg">
        <div className="row">
          <div className="col-3">
            <p className="text-start">©2023 All rights reserved</p>
          </div>
          <div className="col-6">
            <p className="text-center">contact: Tim Erisman | <a className="text-primary" href="tel:925.258.1920">925.258.1920</a> | <a className="text-primary" href="mailto: terisman@advancedprosystems.com">terisman@advancedprosystems.com</a></p>
          </div>
          <div className="col-3">
            <p className="text-end">
              Web by <a href="https://supercleanweb.com">Superclean</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
