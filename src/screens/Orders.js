import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { ContainerCenter } from './styles/MainStyled'

export default Orders = props => {
    return (
        <ContainerCenter>
            <Text>Orders</Text>
        </ContainerCenter>
    )
}

Orders.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}