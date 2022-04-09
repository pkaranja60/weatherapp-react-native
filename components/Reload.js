import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors } from '../utils/colors'

const ReloadIcon = ({load}) => {
    return (
        <View style={styles.refreshIcon}>
            <MaterialCommunityIcons onPress={load} name="reload" size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    refreshIcon: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20
            },
            android: {
                top: 50,
            }
        }),
        right: -40,
        height: 100,
        width: 100
    }
})

export default ReloadIcon