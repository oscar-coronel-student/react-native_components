import { NavigationContainer } from '@react-navigation/native'


import { StackNavigator } from './src/navigators/StackNavigator'

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
