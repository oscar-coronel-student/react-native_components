import { createStackNavigator } from "@react-navigation/stack"

import { HomeScreen } from '../screens/HomeScreen'
import { Animation101Screen } from '../screens/Animation101Screen'
import { Animation102Screen } from '../screens/Animation102Screen'
import { Animation103Screen } from "../screens/Animation103Screen"
import { menuItems } from "../data/menuItems"
import { Animation104Screen } from "../screens/Animation104Screen"
import { TextInputScreen } from "../screens/TextInputScreen"
import { PullToRefreshScreen } from "../screens/PullToRefreshScreen"
import { SectionListScreen } from "../screens/SectionListScreen"
import { ModalScreen } from "../screens/ModalScreen"
import { InfiniteScrollScreen } from "../screens/InfiniteScrollScreen"
import { SlideScreen } from "../screens/SlideScreen"
import { ThemeScreen } from "../screens/ThemeScreen"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export type StackPropsRoot = {
    HomeScreen: undefined
    Animation101Screen: undefined
    Animation102Screen: undefined
    Animation103Screen: undefined
    Animation104Screen: undefined
    TextInputScreen: undefined
    PullToRefreshScreen: undefined
    SectionListScreen: undefined
    ModalScreen: undefined
    InfiniteScrollScreen: undefined
    SlideScreen: undefined
    ThemeScreen: undefined
}

const Stack = createStackNavigator<StackPropsRoot>()

export const StackNavigator = () => {

    const { colors } = useContext( ThemeContext );

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: colors.background
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
            <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
            <Stack.Screen name="Animation103Screen" component={ Animation103Screen } />
            <Stack.Screen name="Animation104Screen" component={ Animation104Screen } />
            <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
            <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
            <Stack.Screen name="SectionListScreen" component={ SectionListScreen } />
            <Stack.Screen name="ModalScreen" component={ ModalScreen } />
            <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
            <Stack.Screen name="SlideScreen" component={ SlideScreen } />
            <Stack.Screen name="ThemeScreen" component={ ThemeScreen } />
        </Stack.Navigator>
    )
}
