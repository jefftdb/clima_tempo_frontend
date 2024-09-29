import logo from './logo.svg';
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "e5bc9c77d59138e53aec43cefe83ae23"; 

  const getWeather = async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Cidade não encontrada, tente novamente.");
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>Cidade:</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite o nome da cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Ícone do tempo"
            />
          <h2>{weatherData.name}</h2>
          <p>
          <FontAwesomeIcon icon={faThermometerHalf} /> Temperatura: {weatherData.main.temp}°C
          </p>
          <p>
          
            {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

