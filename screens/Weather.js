import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';
import ApplicationBar from '../components/ApplicationBar';

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

const icons = {
    location: 'my-location',
    location_searching: 'location-searching'
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')
    const [location, setLocation] = useState(null)
    const [marker, setMarker] = useState(null)
    const [searchIcon, setSearchIcon] = useState(icons.location_searching)

    const getWeatherData = async (latitude, longitude) => {
        const url = `${api.url}lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
        console.log(url)

        try {
            const response = await fetch(url)
            const data = await response.json()

            if (data.main && data.weather && data.weather.length > 0) {
                setTemp(data.main.temp)
                setFeelsLike(data.main.feels_like)
                setDescription(data.weather[0].description)
                setIcon(api.icons + data.weather[0].icon + '@2x.png')

                console.log('API Response:', data);
            } else {
                setDescription('Error retrieving weather information.')
                console.error('Error retrieving weather information', data)
            }
        } catch (error) {
            setDescription('Error retrieving weather information.')
            console.error('Error retrieving weather information', error)
        }
    }


    const getUserLocation = async () => {
        setSearchIcon(icons.location_searching)
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Location permission denied.');
                return;
            }

            const position = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            })
            const currentLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            };

            setLocation(currentLocation)
            setMarker(currentLocation)
            getWeatherData(position.coords.latitude, position.coords.longitude)
            setSearchIcon(icons.location)
        } catch (error) {
            console.error('Error getting user location:', error)
        }
    };


    useEffect(() => {
        getUserLocation()
    }, [])

    useEffect(() => {
        console.log('Map type:', props.mapType)
    }, [props.mapType])

    return (
        <>
            <ApplicationBar
                {...props}
                locationIcon={searchIcon}
                getUserLocation={getUserLocation}
                navigation={props.navigation}
            />
            <View style={styles.container}>
                <View style={styles.weatherInfo}>
                    <Text style={styles.temp}>{temp} °C</Text>
                    <Text style={styles.feelsLike}>Feels like {feelsLike} °C</Text>
                    {icon && <Image source={{ uri: icon }} style={styles.icon} />}
                    <Text style={styles.description}>{description}</Text>
                </View>
                <MapView
                    style={styles.map}
                    region={location}
                    mapType={props.mapType}
                >
                    {marker && <Marker title="My position" coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} />}
                     </MapView>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    map: {
        width: '100%',
        height: 500,
    },
});