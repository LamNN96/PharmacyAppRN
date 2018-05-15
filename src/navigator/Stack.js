import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './../components/Login';
import Home from '../components/Home';
const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        // headerMode: none,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
});

export default RootStack;
