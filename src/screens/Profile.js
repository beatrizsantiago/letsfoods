import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { ContainerCenter } from './styles/MainStyled'

export default Profile = props => {
    return (
        <ContainerCenter>
            <Text>Profile</Text>
        </ContainerCenter>
    )
}

Profile.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}