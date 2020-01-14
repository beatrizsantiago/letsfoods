import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default Register = props => {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <Text>Register</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login') }>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}