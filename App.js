import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import Splash from './src/screens/Splash'
import Login from './src/screens/Login'
import Register from './src/screens/Register'

import Home from './src/screens/Home'
import Restaurant from './src/screens/Restaurant'

import Search from './src/screens/Search'

import Profile from './src/screens/Profile'

import Icon from 'react-native-vector-icons/AntDesign'

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

const HomeStack = createStackNavigator(
    {
        Home: { screen: Home },
        Restaurant: { screen: Restaurant }
    },
    {
        initialRouteName: 'Restaurant',
    }
)

const SearchStack = createStackNavigator(
    {
        Search: { screen: Search }
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile: { screen: Profile }
    }
)

const TabBottom = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: () => ({
				tabBarIcon: <Icon name="home" size={25} color="#fff" />
			})
        },
        Search: {
            screen: SearchStack,
            navigationOptions: () => ({
				tabBarIcon: <Icon name="search1" size={25} color="#fff" />
			})
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: () => ({
				tabBarIcon: <Icon name="user" size={25} color="#fff" />
			})
        },
    },
    {
        initialRouteName: 'Home',
		activeColor: '#fff',
		inactiveColor: '#752222',
		shifting: true,
		barStyle: { backgroundColor: '#f12525' },
    }
)

export default createAppContainer(
    createAnimatedSwitchNavigator(
        {
            Splash: Splash,
            Auth: AuthStack,
            App: TabBottom
        },
        {
            initialRouteName: 'App',
            transition: (
                <Transition.Sequence>
                    <Transition.Out type="fade" durationMs={20} />
                    <Transition.In type="scale" durationMs={200} />
                </Transition.Sequence>
            ),
        }
    )
)