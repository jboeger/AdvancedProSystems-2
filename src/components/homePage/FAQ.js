import * as React from "react";

export function FAQ(props) {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      {props.content.map(({ question, answer }, idx) => (
        <div key={idx}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  )
}