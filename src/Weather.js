import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      updated: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconURL: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: 12,
    });
  }

  function search() {
    const apiKey = "6e3c1137a7cfd59830f8913846cba599";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card Weather-body">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Where in the world..."
              id="search-text-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" id="search" />
          </form>
          <br />
          <WeatherInfo data={weatherData} />
          <hr />
          <h2>15hr Forecast</h2>
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
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
