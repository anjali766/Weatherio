import React, { useContext } from 'react';
import { WeatherContext } from '../../src/context/context';
import FlipCard from './flipcard';

const WeatherForecast = () => {
  const { forecastData } = useContext(WeatherContext);

  if (!forecastData) return <p>Loading...</p>;

  const forecastList = forecastData.list.filter((_ , index) => index % 8 === 0).slice(0, 5);


  return (
    <div className="p-6 border rounded-lg bg-white shadow-md">
    <p className="text-2xl">5-Days Forcast</p>
    <div className="flex flex-wrap justify-center gap-4 mt-10" > 
      {forecastList.map((forecast, index) => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;
        const pressure = forecast.main.pressure;
        const humidity = forecast.main.humidity;
        const visibility = forecast.visibility;

        return (
          // <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-60 text-center" >
          //   <h2 className="text-xl font-semibold mb-2">{day}</h2>
          //   <p className="text-3xl font-bold">{temp}°C</p>
          //   <img
          //     src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          //     alt="Weather icon"
          //     className="mx-auto mt-2"
          //   />
          // </div>
          <FlipCard
            key={index}
            day={day}
            temp={temp}
            icon={icon}
            description={description}
            pressure={pressure}
            humidity={humidity}
            visibility={visibility}
          />
        );
      })}
    </div>
    </div>
  );
};

export default WeatherForecast;
