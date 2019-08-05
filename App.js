import React from 'react';
import { Root } from 'native-base';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer} from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import GridScreen from './screen/GridScreen';
import AuthLoading from './screen/AuthLoading';
import NativeBase from './screen/NativeBase';
import Elements from './screen/Elements';

const appStack = createStackNavigator({
    Home: GridScreen,
    NativeBase: NativeBase,
    Elements: Elements
  },
  {
    initialRouteName: 'Home'
  });
const authStack = createStackNavigator({ LoginScreen: LoginScreen });

console.disableYellowBox = true;

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: appStack,
    Auth: authStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const App = createAppContainer(MainNavigator);

const AppFinal = () => {
    return (
        <Root>
            <App />
        </Root>
    );
}

export default AppFinal;