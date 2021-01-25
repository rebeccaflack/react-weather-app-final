import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          <a
            href="https://github.com/rebeccaflack/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            Coded and open-sourced on GitHub by Rebecca Flack
          </a>
        </footer>
      </div>
    </div>
  );
}
