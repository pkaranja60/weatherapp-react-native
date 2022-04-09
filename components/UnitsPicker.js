import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)} mode='dropdown'>
                <Picker.Item label="°C" value="metric" />
                <Picker.Item label="°F" value="Imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20
            },
            android: {
                top: 50,
            }
        }),
        left: 20,
        height: 50,
        width: 100
    },
})
