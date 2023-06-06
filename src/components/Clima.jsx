import React, { useState } from "react";

const Weather = () => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=eade63c6230eae8ecaa7c13fd24158d1&units=metric`
      );
      const data = await respuesta.json();

      if (respuesta.ok) {
        setWeatherData(data);
        setError(null);
      } else {
        setError("No se encontraron datos de la ciudad ingresada.");
        setWeatherData(null);
      }
    } catch (error) {
      setError("Hubo un error al consultar el clima.");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h2 className="text-center mt-4">Consulta el clima</h2>
      <hr className="hrPrincipal" />
      <form onSubmit={handleSubmit} className="contenedor">
        <h4>Ingrese la ubicación</h4>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <h4>Ingrese el país</h4>
        <p className="text-center mb-0">
          {" "}
          Tiene que ser con dos letras, ej: Argentina (AR)
        </p>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button type="submit" className="btn btn-dark mt-1" id="boton">
          Consultar
        </button>
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div className="weather-data mt-5 text-center">
            <h4>Información del clima</h4>
            <p>
              Rango de temperatura:{" "}
              <b>
                {" "}
                {weatherData.main.temp_max}°C - {weatherData.main.temp_min}°C{" "}
              </b>
            </p>
            <p>
              Temperatura actual: <b> {weatherData.main.temp}°C </b>{" "}
            </p>
            <p>
              Humedad: <b> {weatherData.main.humidity}%</b>{" "}
            </p>
            <p>
              Descripción: <b> {weatherData.weather[0].description} </b>{" "}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Weather;
