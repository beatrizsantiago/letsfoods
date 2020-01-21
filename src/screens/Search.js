import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { ContainerCenter } from './styles/MainStyled'

export default Search = props => {
    return (
        <ContainerCenter>
            <Text>Search</Text>
        </ContainerCenter>
    )
}

Search.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}