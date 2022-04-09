import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, Fontisto, Entypo, Ionicons } from '@expo/vector-icons';

import { colors } from '../utils/colors'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ currentWeather }) {

    const { main: { feels_like, humidity, pressure }, wind: { speed } } = currentWeather

    return (
        <View style={styles.weatherDetails}>
            <View style={{ ...styles.weatherDetailsRow, borderBottomWidth: 1, borderBottomColor: BORDER_COLOR }}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <Entypo name="drop" size={20} color="skyblue" />
                    <View style={styles.weatherDetailsItem}>
                        <Text>Humidity:</Text>
                        <Text style={styles.text}>{humidity} %</Text>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <FontAwesome5 name="temperature-low" size={20} color={colors.PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItem}>
                        <Text>feels_like: </Text>
                        <Text style={styles.text}>{feels_like}°</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR }}>
                    <Fontisto name="wind" size={20} color="gray" />
                    <View style={styles.weatherDetailsItem}>
                        <Text>wind speed:</Text>
                        <Text style={styles.text}>{speed} m/h</Text>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <Ionicons name="speedometer-outline" size={20} color="black" />
                    <View style={styles.weatherDetailsItem}>
                        <Text>pressure:</Text>
                        <Text style={styles.text}>{pressure} hpa</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        marginBottom: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    weatherDetailsBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    weatherDetailsItem: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    text: {
        color: SECONDARY_COLOR,
        fontSize: 13,
        fontWeight: '500'
    }
})