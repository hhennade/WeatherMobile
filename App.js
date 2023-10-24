import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './screens/Weather';
import Settings from './screens/Settings';
import Search from './screens/Search';

export default function App() {
  const [mapType, setMapType] = useState('standard');
  const Stack = createNativeStackNavigator();

  return (
    <>
      <MyStatusBar
        backgroundColor='#49D295'
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Weather' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="weather">
              {(props) => (
                <Weather
                  {...props}
                  backgroundColor='#49D295'
                  title="Weather"
                  mapType={mapType}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="settings">
              {(props) => (
                <Settings
                  {...props}
                  backgroundColor='#49D295'
                  title="Settings"
                  setMapType={setMapType}
                  mapType={mapType}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="search">
              {(props) => (
                <Search
                  {...props}
                  backgroundColor='#49D295'
                  title="Search"
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
}
);
