import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import Splash from './src/screens/Splash'
import Login from './src/screens/Login'
import Register from './src/screens/Register'

const AuthStack = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register }
    },
    {
        headerMode: "none",
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps
                const { index } = scene

                const height = layout.initHeight
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, -height],
                })

                return { transform: [{ translateX }] }
            },
        }),
    }
)

export default createAppContainer(
    createAnimatedSwitchNavigator(
        {
            Splash: Splash,
            Auth: AuthStack
        },
        {
            transition: (
                <Transition.Sequence>
                    <Transition.Out type="fade" durationMs={400} />
                    <Transition.In type="scale" durationMs={200} />
                </Transition.Sequence>
            ),
        }
    )
)