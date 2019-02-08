import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../pages/home'
import Start from '../pages/game'
import About from '../pages/about'

import _text from '../../assets/locales/fr/locales'



const HomeScreen = () => <Home data={_text.home}/>
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Introduction',
  tabBarIcon: () => (
      <Image
        source={require('../../assets/img/icons/002-house.png')}        
      />
  ),
};

const StartScree = () => <Start data={_text.game}/>
const StartStack = createStackNavigator({
  Start: StartScree,
});

StartStack.navigationOptions = {
  tabBarLabel: 'Jouer',
  tabBarIcon: () => (
      <Image
        source={require('../../assets/img/icons/003-playing-cards.png')}        
      />
  ),
};

const AboutScreen = () => <About data={_text.about}/>
const AboutStack = createStackNavigator({
  About: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'A Propos',
  tabBarIcon: () => (
      <Image
        source={require('../../assets/img/icons/001-info.png')}        
      />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  StartStack,
  AboutStack  
});