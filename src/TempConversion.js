import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div className="TempConversion">
        <h1 className="current-temperature">
          <span id="current-temperature"> {Math.round(props.celsius)} </span>
          <span className="units">
            ˚C |{" "}
            <a
              href="/"
              onClick={showFarenheit}
              id="farenheit-link"
              rel="noreferrer"
            >
              ˚F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <h1 className="current-temperature">
          <span id="current-temperature"> {Math.round(farenheit)} </span>
          <span className="units">
            <a
              href="/"
              onClick={showCelsius}
              id="celsius-link"
              className="active"
              rel="noreferrer"
            >
              ˚C
            </a>{" "}
            | ˚F
          </span>
        </h1>
      </div>
    );
  }
}
