import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'

import logo from '../assets/img/logo_black.png'

import { ContainerCenter } from './styles/MainStyled'
import { Welcome } from './styles/SplashStyled'

export default function Splash(props) {

    const springValue = new Animated.Value(0.3)
    const textAnimation = new Animated.Value(0)


    useEffect(() => {
        animate()
        // setTimeout(() => {
        //     props.navigation.navigate('Login')
        // }, 4000);
    }, [])

    const animate = () => {
        springValue.setValue(0.3)
        textAnimation.setValue(0)

        Animated.parallel([
            Animated.spring(
                springValue,
                {
                    toValue: 1,
                    friction: 3,
                    tension: 5
                }
            ),
            Animated.timing(
                textAnimation,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.ease,
                }
            )
        ]).start()
    }

    return (
        <ContainerCenter>
            <Animated.Image source={logo} style={{ width: 283, height: 120, transform: [{ scale: springValue }] }} />
            <Animated.View style={{ top: textAnimation.interpolate({ inputRange: [0, 1], outputRange: [500, 120] }) }}>
                <Welcome>Bem Vindo(a)!</Welcome>
            </Animated.View>
        </ContainerCenter>
    )
}