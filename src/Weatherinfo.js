import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import WeatherIcon from "./WeatherIcon";

export default function weatherInfo(props) {
  return (
    <span className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <h5>Last updated:</h5>
      <p className="full-date">
        <FormattedDate date={props.data.updated} />
      </p>
      <h5>
        <span id="current-date"></span>
      </h5>
      <TempConversion celsius={props.data.temperature} />
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
          <WeatherIcon icon={props.data.iconURL} alt={props.data.description} />
        </div>
      </div>
    </span>
  );
}
