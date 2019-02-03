import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './components/navigation';

export default createAppContainer(createSwitchNavigator({
    Main: MainTabNavigator,
}));