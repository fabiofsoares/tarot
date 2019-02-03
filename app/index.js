import React from 'react';
import { View } from 'react-native';
import Home from './pages/home'
import Game from './pages/game'
import _text from '../assets/locales/fr/locales'

export default class App extends React.Component {
  
  render() {   
    return (
      <Game data={ _text.game }/>  
    );
  }
}


