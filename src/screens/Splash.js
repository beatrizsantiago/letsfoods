import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default Splash = props => {
    return (
        <View>
            <Text>Splash</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}