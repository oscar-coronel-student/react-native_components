import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator'

import 'react-native-gesture-handler';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import { AppProviders } from './src/providers/AppProviders';


const AppNavigation = ({ children }: PropsWithChildren) => {
  const { currentTheme } = useContext( ThemeContext );
  return <NavigationContainer theme={ currentTheme === 'light' ? DefaultTheme : DarkTheme }>
    {children}
  </NavigationContainer>
}

export default () => {
  return <>
    <AppProviders>
      <AppNavigation>
        <StackNavigator />
      </AppNavigation>
    </AppProviders>
  </>
  
}
