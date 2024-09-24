# Weather Dashboard Application
A modern, responsive weather dashboard application built with React, Tailwind CSS and the OpenWeatherMap API. The app allows users to search for cities and view both current weather and a 5-day forecast. The application also includes air quality data and various weather details like temperature, humidity, wind speed, and more. If a city is not found its shows Error Message or the input is empty, by default it shows weather data for Gurgaon.

Features
Search Functionality: Allows users to search for any city and fetch weather data for that location.
Default City: If the search input is empty, the weather for Gurgaon is displayed by default.
Current Weather: Displays current weather conditions, including temperature, humidity, Pressure , Visibility and weather icon.
5-Day Forecast: Displays a 5-day weather forecast with the option to flip cards to reveal detailed forecast data.
Air Quality Data: Shows air quality data including key attributes like AQI, Wind Speed.
Error Handling: If an invalid city is entered, an error message is displayed.
Responsive Design: Mobile-friendly UI using Tailwind CSS.
Debounced Search Input: Reduces unnecessary API calls by debouncing user input in the search bar.