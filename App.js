/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import router from './src/routes'

const Tabs = createBottomTabNavigator(router, {
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#12d0db',
    inactiveTintColor: '#405c8b',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#242f42',
    },
  },
})

const AppContainer = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
