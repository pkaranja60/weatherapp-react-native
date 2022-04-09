import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { colors } from '../utils/colors'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

function WeatherInfo({ currentWeather }) {

    const { main: { temp }, name, weather: [details] } = currentWeather

    const { icon, main, description } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`


    return (
        <View style={styles.container}>
            <Text style={styles.city}>{name}</Text>
            <Image style={styles.icon} source={{ uri: iconUrl }} alt={icon} />
            <Text style={styles.temp}>{temp}°</Text>
            <Text style={styles.textMain}>{main}</Text>
            <Text style={styles.textMainDescription}>{description}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    city: {
        color: 'black',
        fontSize: 24,
    },
    icon: {
        width: 150,
        height: 150,
    },
    temp: {
        color: PRIMARY_COLOR,
        fontSize: 45
    },
    textMain: {
        fontSize: 25,
        color: SECONDARY_COLOR,
        fontWeight: '600',
        margin: 5,
        letterSpacing: 4,
    },
    textMainDescription: {
        fontSize: 17,
        letterSpacing: 1.5,
        fontWeight: '500',
    }
})


export default WeatherInfo