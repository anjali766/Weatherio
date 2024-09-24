import React from 'react';

const flipCard = ({ day, temp, icon, description, pressure, humidity, visibility }) => {
    return (
        <div className="flip-card w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flip-card-inner w-full h-full">
                <div className="card-front flex flex-col justify-center items-center h-40 p-4 bg-gradient-to-br from-blue-200 to-orange-200 rounded-lg">
                    <h2 className="text-xl font-semibold p-2">{day}</h2>
                    <p className="text-3xl font-bold">{temp}°C</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="Weather icon"
                        className="mx-auto "
                    />
                </div>

                <div className="card-back flex flex-col justify-center items-center p-4 bg-white rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Details</h2>
                    <p>{description}</p>
                    <p >Pressure: {pressure} hPa</p>
                    <p >Humidity: {humidity}%</p>
                    <p>Visibility: {visibility} m</p>
                </div>
            </div>
        </div>
    );
};

export default flipCard;
