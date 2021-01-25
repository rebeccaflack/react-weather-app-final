import React from "react";
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <h5>Last updated:</h5>
      <p className="full-date">
        <FormattedDate date={props.data.updated} />
      </p>
      <h5>
        <span id="current-date"></span>
      </h5>
      <h1 className="current-temperature">
        <span id="current-temperature">
          {" "}
          {Math.round(props.data.temperature)}{" "}
        </span>
        <span className="units">
          <a href="#" id="celsius-link" className="active" rel="noreferrer">
            ˚C
          </a>{" "}
          |
          <a href="#" id="farenheit-link" rel="noreferrer">
            ˚F
          </a>
        </span>
      </h1>
      <div className="row">
        <div className="col-6">
          <p>
            <span id="weather-description" className="text-capitalize">
              {props.data.description}
            </span>
            <br />
            <br />
            <strong>Wind:</strong> <span id="wind"> {props.data.wind} </span>{" "}
            km/h
            <br />
            <strong>Humidity:</strong>{" "}
            <span id="humidity">{props.data.humidity}</span>%
            <br />
            <strong>Precipitation:</strong>{" "}
            <span id="precipitation">{props.data.humidity}</span>%
          </p>
        </div>
        <div className="col-6 center-block text-center">
          <img
            src={props.data.iconURL}
            className="current-weather-icon"
            id="icon"
            alt={props.data.description}
          />
        </div>
      </div>
      <div className="card text-center quote">
        <div className="card-body">
          <p>This is my weather app</p>
        </div>
      </div>
    </div>
  );
}
