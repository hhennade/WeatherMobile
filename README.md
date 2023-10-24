# WeatherMobile App

## Table of Contents
- [Introduction](#introduction)
- [Purpose](#purpose)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [API Key Configuration](#api-key-configuration)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)

## Introduction
WeatherMobile is a mobile application that provides weather information for a given location. It allows users to search for weather data based on a place name or coordinates and provides real-time weather updates.

## Purpose
The purpose of this app is to demonstrate how to build a weather application for mobile devices. It serves as a practical example for developers who want to create weather-related apps using React Native and API integrations. 

## Features
- Search for weather information by place name.
- Search for weather information by coordinates.
- Display real-time weather data, including temperature, feels-like temperature, and weather description.
- Display weather icons to represent the current weather conditions.

## Getting Started

### Prerequisites
Before you can run the WeatherMobile app, make sure you have the following prerequisites:
- Node.js: [Installation Guide](https://nodejs.org/)
- Expo CLI: [Installation Guide](https://docs.expo.io/get-started/installation/)
- API Key: You'll need an API key from a weather data provider (e.g., OpenWeatherMap). You can obtain an API key by signing up on their website.

### API Key Configuration
1. Sign up for an API key on the weather data provider's website (e.g., OpenWeatherMap).
2. Once you have your API key, create a file named `.env` in the project root directory.
3. Add your API key to the `.env` file in the following format:

   ```plaintext
   EXPO_PUBLIC_API_KEY=YOUR_API_KEY_HERE

# Installation
1. git clone https://github.com/yourusername/WeatherMobile.git
2. cd WeatherMobile
3. npm install

# Usage
1. npm start
2. The Expo development server will open, and you can run the app on your Android or iOS device using the Expo Go app.
3. Use the app to search for weather information by place name or coordinates. The weather data will be displayed on the screen, including the current temperature, feels-like temperature, and weather description.

