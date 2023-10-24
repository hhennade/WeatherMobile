import React, { useEffect, useState } from "react";
import NavigateBack from "../components/NavigateBack";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from "@react-native-material/core";


const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL,
    url2: process.env.EXPO_PUBLIC_API_URL2,
};

export default function Search(props) {
    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [description, setDescription] = useState('')
    const [place, setPlace] = useState('')
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [error, setError] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        if (latitude !== 0 && longitude !== 0) {
            getWeatherByCoordinates(latitude, longitude)
        }
    }, [latitude, longitude]);

    const getWeather = async (place) => {
        const url = `${api.url2}q=${place}&limit=1&appid=${api.key}`
        console.log(url)

        try {
            const response = await fetch(url)
            const data = await response.json()

            if (response.ok) {
                if (data.length > 0) {
                    setLongitude(data[0].lon);
                    setLatitude(data[0].lat);
                    console.log("API Response:", data)
                    getWeatherByCoordinates(latitude, longitude)
                } else {
                    setError("Weather information not found for the given place.")
                }
            } else {
                setError(
                    "Failed to retrieve weather information. Please check your input or try again later."
                );
            }
        } catch (error) {
            setError(
                "An error occurred while retrieving weather information. Please try again later."
            );
            console.error("Error retrieving weather information", error)
        }
    };

    const getWeatherByCoordinates = async (latitude, longitude) => {
        const weatherUrl = `${api.url}lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
        console.log(weatherUrl)

        try {
            const response = await fetch(weatherUrl)
            const data = await response.json()

            if (response.ok) {
                if (data.main && data.weather && data.weather.length > 0) {
                    setTemp(data.main.temp)
                    setFeelsLike(data.main.feels_like)
                    setDescription(data.weather[0].description)
                    setIcon(api.icons + data.weather[0].icon + '@2x.png')
                    console.log("Weather API Response:", data)
                } else {
                    setError("Weather information not found for the given coordinates.")
                }
            } else {
                setError(
                    "Failed to retrieve weather information based on coordinates. Please try again later."
                );
            }
        } catch (error) {
            setError(
                "An error occurred while retrieving weather information based on coordinates. Please try again later."
            );
            console.error("Error retrieving weather information based on coordinates", error)
        }
    };

    return (
        <>
            <NavigateBack {...props} />
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput
                        placeholder="Search for a place"
                        value={place}
                        style={styles.input}
                        textAlign="center"
                        onChangeText={(place) => setPlace(place)}
                    />
                    <Button
                        title="Search"
                        onPress={() => {
                            getWeather(place);
                        }}
                        style={{backgroundColor:'#49D295'}}
                    />
                    {error && <Text style={styles.errorText}>{error}</Text>}
                </View>
                {temp !== 0 && (
                    <View style={styles.container}>
                        <View style={styles.weatherInfo}>
                            <Text style={styles.heading}>Current weather in {place}</Text>
                            <Text style={styles.temp}>{temp} °C</Text>
                            <Text style={styles.feelsLike}>Feels like {feelsLike} °C</Text>
                            {icon && <Image source={{ uri: icon }} style={styles.icon} />}
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        color: global.backgroundColor,
        textTransform: "uppercase",
    },
    input: {
        marginTop: 16,
    },
    weatherInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    temp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
    },
});
