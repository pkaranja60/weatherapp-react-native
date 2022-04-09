import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import { colors } from './utils/colors'

import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker'

const WEATHER_API_KEY = 'ff4c63f6688143ef10147b801d226551'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'


export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [unitsSystem])

  async function load() {

    setCurrentWeather(null)
    setErrorMessage(null)

    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('Access to Location is required to run App')
        return
      }

      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)

      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

      // alert(`Latitude: ${latitude}, Longitude: ${longitude}`)

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if (currentWeather) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <StatusBar style='auto' />
      </View>
    )
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style='auto' />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  }
});
