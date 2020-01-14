import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default Login = props => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register') }>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}