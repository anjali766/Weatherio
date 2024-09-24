import React, { useContext } from 'react';
import { WeatherContext } from '../../src/context/context';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAir } from "react-icons/md";
import air from '../../src/assets/WindDay.gif';


const WeatherDetails = () => {
  const { weatherData, airQualityData } = useContext(WeatherContext);

  if (!weatherData || !airQualityData) return <p>Loading...</p>;

  const { main, weather, visibility } = weatherData;
  const { pressure, humidity } = main;
  const windspeed = weatherData.wind.speed;
  const aqi = airQualityData.list[0].main.aqi;

  return (
    <div className="flex justify-between space-x-8 ">

      <div className="p-6 border rounded-lg bg-white shadow-md w-1/2 h-80 bg-gradient-to-br from-cyan-200 to-orange-200">
      
      <div className="flex">
        <div>
        <div className="flex gap-5">
          <span className="bg-stone-200 inline-flex items-center justify-center w-10 h-10 rounded-full"><TiWeatherPartlySunny color='orange' size={25} /></span>
          <h2 className="text-2xl font-bold mb-4">Weather</h2>
        </div>
        <div className="mt-4">
            <p className="font-bold text-3xl">{main.temp}°C</p>
            <p className="text-lg mb-4">Condition: {weather[0].description}</p>
            <p className="text-sm text-gray-600">Min Temp: {main.temp_min}°C</p>
            <p className="text-sm text-gray-600">Max Temp: {main.temp_max}°C</p>
          </div>
          </div>
          <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto mt-2 w-40 h-auto" 
            />
        </div>


        <div className="flex justify-between space-x-4 mt-3.5 text-center">
          <div className="p-4 bg-custom-gray rounded-lg text-white w-1/3 ">
            <p>Pressure</p>
            <p className="font-bold">{pressure} hPa</p>
          </div>
          <div className="p-4 bg-lime-500  rounded-lg text-black w-1/3">
            <p>Visibility</p>
            <p className="font-bold">{visibility / 1000} km</p>
          </div>
          <div className="p-4 bg-white border rounded-lg text-black w-1/3">
            <p>Humidity</p>
            <p className="font-bold">{humidity}%</p>
          </div>
        </div>
      </div>


      <div className="p-6 border rounded-lg bg-white shadow-md w-1/2 h-80">
        <div className="flex gap-5">
          <span className="bg-stone-200 inline-flex items-center justify-center w-10 h-10 rounded-full"><MdAir color='orange' size={25} /></span>
          <h2 className="text-2xl font-bold mb-4">Air Quality</h2>
        </div>
        <div className="flex justify-between">
        <div className="mt-8 text-7xl">
        <p className="text-lg">Air Quality Index: {aqi}</p>
        <p className="text-sm text-gray-600">
          {aqi === 1 && 'Good'}
          {aqi === 2 && 'Fair'}
          {aqi === 3 && 'Moderate'}
          {aqi === 4 && 'Poor'}
          {aqi === 5 && 'Very Poor'}
        </p>
        <p className="text-sm text-gray-600">Wind Speed: {windspeed}</p>
        </div>
        <img src={air} className="w-1/2 h-1/2" />
        </div>
      </div>


    </div>
  );
};

export default WeatherDetails;
