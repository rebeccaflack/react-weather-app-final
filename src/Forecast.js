import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[0]} />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[1]} />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[2]} />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[3]} />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[4]} />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <ForecastPreview data={forecast.list[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6e3c1137a7cfd59830f8913846cba599";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
