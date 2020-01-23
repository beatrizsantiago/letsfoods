import React from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'

import logo from '../assets/img/logo_black.png'

import { ContainerCenter, ContainerRed } from './styles/MainStyled'
import { LogoContainerGray, LabelAlign, LabelInput, InputRadius, ButtonRadius, TextButton, TextSubtitleGray, RegisterContainer, TextTitle } from './styles/AuthStyled'
import { Colors } from './styles/themes/Colors'

export default Register = props => {
    return (
        <ContainerRed>
            <StatusBar hidden />
            <LogoContainerGray>
                <Image source={logo} style={{ width: 141, height: 60 }} />
            </LogoContainerGray>

            <RegisterContainer>
                <TextTitle>Registre-se</TextTitle>

                <LabelAlign>
                    <LabelInput>Nome</LabelInput>
                    <InputRadius />
                </LabelAlign>

                <LabelAlign>
                    <LabelInput>E-mail</LabelInput>
                    <InputRadius />
                </LabelAlign>

                <LabelAlign>
                    <LabelInput>Senha</LabelInput>
                    <InputRadius />
                </LabelAlign>

                <LabelAlign>
                    <LabelInput>Confirmar Senha</LabelInput>
                    <InputRadius />
                </LabelAlign>

                <LabelAlign>
                    <LabelInput>Telefone</LabelInput>
                    <InputRadius />
                </LabelAlign>

                <ButtonRadius>
                    <TextButton>Enviar</TextButton>
                </ButtonRadius>

                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <TextSubtitleGray>Voltar</TextSubtitleGray>
                </TouchableOpacity>
            </RegisterContainer>
        </ContainerRed>
    )
}