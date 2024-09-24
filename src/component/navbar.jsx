import React, { useContext } from 'react';
import { WeatherContext } from '../context/context';
import { IoLocationSharp } from "react-icons/io5";


const Navbar = () => {
    const { city } = useContext(WeatherContext);
    return (
        <div className="flex items-center"><IoLocationSharp size={30} /><h1 className="text-3xl font-bold ml-4 ">{city}</h1>
        </div>
    )
}

export default Navbar;