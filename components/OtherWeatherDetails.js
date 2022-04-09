import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function OtherWeatherDetails({ currentWeather }) {
    const { dt,sys: { country, sunrise, sunset } } = currentWeather

    return (
        <View style={styles.otherWeatherDetails}>
            <Text style={styles.text}>{country}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    otherWeatherDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60,
        marginBottom: 25,
    },
    text: {
        fontWeight: '700',
        letterSpacing: 2,
        fontSize: 18,
    }
})