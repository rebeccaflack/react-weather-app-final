import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./Weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      updated: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconURL: URL,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: 12,
    });
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    const apiKey = "6e3c1137a7cfd59830f8913846cba599";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return (
      <Loader
        type="Rings"
        color="#2f3e46"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
