import React from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'

import logo from '../assets/img/logo_black.png'

import { ContainerCenter } from './styles/MainStyled'
import { LogoContainer, TextSubtitle, LabelAlign, LabelInput, InputRadius, ButtonRadius, TextButton, TextSubtitleGray } from './styles/AuthStyled'
import { Colors } from './styles/themes/Colors'

export default Login = props => {
    return (
        <ContainerCenter>
            <StatusBar hidden />
            <LogoContainer>
                <Image source={logo} style={{ width: 236, height: 100 }} />
                <TextSubtitle>Pode passear, a gente te chama!</TextSubtitle>
            </LogoContainer>

            <LabelAlign>
                <LabelInput>E-mail</LabelInput>
                <InputRadius />
            </LabelAlign>

            <LabelAlign>
                <LabelInput>Senha</LabelInput>
                <InputRadius />
            </LabelAlign>

            <ButtonRadius onPress={() => props.navigation.navigate('App')}>
                <TextButton>Login</TextButton>
            </ButtonRadius>

            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <TextSubtitleGray>Registre-se</TextSubtitleGray>
            </TouchableOpacity>

        </ContainerCenter>
    )
}