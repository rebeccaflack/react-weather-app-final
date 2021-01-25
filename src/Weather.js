import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      updated: "Wednesday 07:00",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconURL: URL,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: 12,
    });
    setReady(true);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card Weather-body">
          <form id="search-form">
            <input
              type="text"
              placeholder="Where in the world..."
              id="search-text-input"
              autoFocus="on"
            />
            <input type="submit" value="🔍" id="search" />
            <input
              type="submit"
              value="📍 Current"
              id="current-location-button"
            />
          </form>
          <br />
          <h1 className="city">{weatherData.city}</h1>
          <h5>Last updated: {weatherData.updated}</h5>
          <h5>
            <span id="current-date"></span>
          </h5>
          <h1 className="current-temperature">
            <span id="current-temperature">
              {" "}
              {Math.round(weatherData.temperature)}{" "}
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
                  {weatherData.description}
                </span>
                <br />
                <br />
                <strong>Wind:</strong>{" "}
                <span id="wind"> {weatherData.wind} </span> km/h
                <br />
                <strong>Humidity:</strong>{" "}
                <span id="humidity">{weatherData.humidity}</span>%
                <br />
                <strong>Precipitation:</strong>{" "}
                <span id="precipitation">{weatherData.humidity}</span>%
              </p>
            </div>
            <div className="col-6 center-block text-center">
              <img
                src={weatherData.iconURL}
                className="current-weather-icon"
                id="icon"
                alt={weatherData.description}
              />
            </div>
          </div>
          <div className="card text-center quote">
            <div className="card-body">
              <p>This is my weather app</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `6e3c1137a7cfd59830f8913846cba599`;
    let city = "Toronto";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
