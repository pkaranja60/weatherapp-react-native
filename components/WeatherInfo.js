import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Octicons } from '@expo/vector-icons';

import { colors } from '../utils/colors'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

function WeatherInfo({ currentWeather }) {

    const { main: { temp }, name, weather: [details] } = currentWeather

    const { icon, main, description } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`


    return (
        <View style={styles.container}>
            <View style={styles.cityContainer}>
                <Text style={styles.city}>{name}</Text>
                <Octicons name="location" size={20} color={colors.SECONDARY_COLOR} />
            </View>
            <Image style={styles.icon} source={{ uri: iconUrl }} alt={icon} />
            <Text style={styles.temp}>{temp}°</Text>
            <Text style={styles.textMain}>{main}</Text>
            <Text style={styles.textMainDescription}>{description}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    city: {
        color: 'black',
        fontSize: 24,
        marginRight: 20,
    },
    icon: {
        width: 100,
        height: 100,
    },
    temp: {
        color: PRIMARY_COLOR,
        fontWeight: '600',
        fontSize: 35,
        letterSpacing: 6
    },
    textMain: {
        fontSize: 22,
        color: SECONDARY_COLOR,
        fontWeight: '600',
        margin: 4,
        letterSpacing: 4,
    },
    textMainDescription: {
        fontSize: 17,
        letterSpacing: 1.5,
        fontWeight: '500',
    }
})


export default WeatherInfo