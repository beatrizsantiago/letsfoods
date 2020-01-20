import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { ContainerCenter } from './styles/MainStyled'

export default Cart = props => {
    return (
        <ContainerCenter>
            <Text>Cart</Text>
        </ContainerCenter>
    )
}

Cart.navigationOptions = ({ navigation }) => {
    return ({
        header: null
    })
}