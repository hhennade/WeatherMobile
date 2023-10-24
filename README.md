# WeatherMobile App

## Introduction
WeatherMobile is a mobile application that provides weather information for a given location. It allows users to search for weather data based on a place name or by the user's current location and provides real-time weather updates. 

## Features
- Search for weather information by place name.
- Search for weather information by user's current location.
- Display real-time weather data, including temperature, feels-like temperature, and weather description.
- Display weather icons to represent the current weather conditions.

## Getting Started

### Prerequisites
- API Key: You'll need an API key from a weather data provider (e.g., OpenWeatherMap). You can obtain an API key by signing up on their website.

### API Key Configuration
1. Sign up for an API key on the weather data provider's website (e.g., OpenWeatherMap).
2. Once you have your API key, create a file named `.env` in the project root directory.
3. Add your API key to the `.env` file in the following format:

   ```plaintext
   EXPO_PUBLIC_API_KEY=YOUR_API_KEY_HERE
4. At the same time also add following lines to your `.env` file:
   
   ```plaintext
   EXPO_PUBLIC_ICONS_URL: http://openweathermap.org/img/wn/
   EXPO_PUBLIC_API_URL: https://api.openweathermap.org/data/2.5/weather?
   EXPO_PUBLIC_API_URL2: https://api.openweathermap.org/geo/1.0/direct?

# Installation
1. git clone https://github.com/yourusername/WeatherMobile.git
2. cd WeatherMobile
3. ```plaintext
   npm install

# Usage
1. ```plaintext
   npm start
2. The Expo development server will open, and you can run the app on your Android or iOS device using the Expo Go app.
3. Use the app to search for weather information by place name or coordinates. The weather data will be displayed on the screen, including the current temperature, feels-like temperature, and weather description.

