import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Gurgaon'); 
  const [weatherData, setWeather] = useState(null);
  const [forecastData, setForecast] = useState(null);
  const [airQualityData, setAirQ] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'cdcb47c8bfa3248fc2f68c8620cdc229'; 

  useEffect(() => {

    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!weatherResponse.ok) {
          throw new Error('City not found'); 
        }
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
        setError(null);

        if (weatherData.coord) {
          fetchAirQualityData(weatherData.coord.lat, weatherData.coord.lon);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather(null); 
        setError(error.message);
      }
    };


    const fetchAirQualityData = async (lat, lon) => {
      try {
        const airQualityResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );

        if (!airQualityResponse.ok) {
          throw new Error('City not found for forecast'); // Error for invalid city forecast
        }
        const airQualityData = await airQualityResponse.json();
        setAirQ(airQualityData);
        setError(null);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
        setAirQ(null); 
        setError(error.message);
      }
    };

 
    const fetchForecastData = async () => {
      try {
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!forecastResponse.ok) {
          throw new Error('City not found for forecast'); // Error for invalid city forecast
        }

        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
        setError(null);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setForecast(null); 
        setError(error.message);
      }
    };


    fetchWeatherData();
    fetchForecastData();
  }, [city, apiKey]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, forecastData, airQualityData , error }}>
      {children}
    </WeatherContext.Provider>
  );
};
