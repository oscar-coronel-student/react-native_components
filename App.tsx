import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator'

import 'react-native-gesture-handler';

export default () => {
  return <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
}
