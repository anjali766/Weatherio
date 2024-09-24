import React from 'react';
import Navbar from './component/navbar';
import WeatherDetails from './component/weatherDetails';
import WeatherForecast from './component/forcast';
import SearchBar from './component/search';
import { WeatherProvider } from './context/context';


function App() {
  return (
    <WeatherProvider>
      <div className="p-4 mx-10 font-serif">
        <div className="flex justify-between">
          <Navbar />
          <SearchBar />
        </div>
        <div className=" mt-10">
          <WeatherDetails />
        </div>
        <div className="mt-20">
            <WeatherForecast />
        </div>
      </div>
    </WeatherProvider>
  )
}

export default App;
