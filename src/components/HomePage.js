import React, { useState } from 'react';
import getWeatherData from '../api/getWeatherData';

const HomePage = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleLatLonSearch = async (event) => {
    event.preventDefault();
    try {
      // lat and lon are passed as properties of the data object
      const data = await getWeatherData({ lat: latitude, lon: longitude });
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  /* Handler functions */

  const handleCitySearch = async (event) => {
    event.preventDefault();
    try {
      const data = await getWeatherData({ city });
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* ... navbar and other components ... */}

      {/* Bootstrap Navbar with Image/Text Combination */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/snowflake.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
             Weather App
          </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
      </nav>

      {/* Search bar for latitude and longitude */}
      <div className='form-container'>
      <form onSubmit={handleLatLonSearch} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="number"
          placeholder="Latitude"
          aria-label="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          className="form-control me-2"
          type="number"
          placeholder="Longitude"
          aria-label="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search by Lat/Lon</button>
      </form>

      {/* Search bar for city name */}
      <form onSubmit={handleCitySearch} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="City Name"
          aria-label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search by City</button>
      </form>
      </div>
      

      {/* Placeholder for weather data */}
      <div className="weather-data-container">
        {weatherData && (
            <div>
                <h2>Weather Data</h2>
                    <img 
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                    />
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
            </div>
        )}

        {/* Dynamic Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Developed by stjepanDeveloper
      </footer>
      </div> 
    </div>
  );
};

export default HomePage;
