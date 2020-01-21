import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import Splash from './src/screens/Splash'
import Login from './src/screens/Login'
import Register from './src/screens/Register'

import Cart from './src/screens/Cart'

import Home from './src/screens/Home'
import Restaurant from './src/screens/Restaurant'
import MenuRestaurant from './src/screens/MenuRestaurant'
import DetailsItemMenu from './src/screens/DetailsItemMenu'

import Search from './src/screens/Search'

import Orders from './src/screens/Orders'

import Profile from './src/screens/Profile'

import Icon from 'react-native-vector-icons/AntDesign'

import { Colors } from './src/screens/styles/themes/Colors'

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
        Restaurant: { screen: Restaurant },
        MenuRestaurant: { screen: MenuRestaurant },
        DetailsItemMenu: { screen: DetailsItemMenu },
        Cart: { screen: Cart }
    },
    {
        initialRouteName: 'Home',
    }
)

const SearchStack = createStackNavigator(
    {
        Search: { screen: Search },
    }
)

const OrdersStack = createStackNavigator(
    {
        Orders: { screen: Orders },
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
            navigationOptions: (props) => ({
                tabBarIcon: <Icon name="home" size={25} color={Colors.white} />,
                tabBarVisible: props.navigation.state.index == 0 ? true : false
            })
        },
        Search: {
            screen: SearchStack,
            navigationOptions: (props) => ({
                tabBarIcon: <Icon name="search1" size={25} color={Colors.white} />,
                tabBarVisible: props.navigation.state.index == 0 ? true : false
            })
        },
        Orders: {
            screen: OrdersStack,
            navigationOptions: (props) => ({
                tabBarIcon: <Icon name="bars" size={25} color={Colors.white} />,
                tabBarVisible: props.navigation.state.index == 0 ? true : false
            })
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: (props) => ({
                tabBarIcon: <Icon name="user" size={25} color={Colors.white} />,
                tabBarVisible: props.navigation.state.index == 0 ? true : false
            })
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: Colors.white,
        inactiveColor: Colors.redDark,
        shifting: true,
        barStyle: { backgroundColor: Colors.redFood },
    }
)

export default createAppContainer(
    createAnimatedSwitchNavigator(
        {
            Splash: Splash,
            Auth: AuthStack,
            App: TabBottom,
        },
        {
            initialRouteName: 'Splash',
            transition: (
                <Transition.Sequence>
                    <Transition.Out type="fade" durationMs={20} />
                    <Transition.In type="scale" durationMs={200} />
                </Transition.Sequence>
            ),
        }
    )
)