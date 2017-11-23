import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Header from 'components/Header';
import { colors } from 'styles';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

const createRootNavigator = (usuarioLogado = false) => (
    StackNavigator({
        Welcome: { screen: Welcome },
        User: {
            screen: TabNavigator({
                Repositories: { screen: Repositories },
                Organizations: { screen: Organizations },
            }, {
                animationEnabled: true,
                swipeEnabled: true,
                tabBarPosition: 'bottom',
                tabBarOptions: {
                    showLabel: false,
                    activeTintColor: colors.white,
                    inactiveTintColor: colors.inactive,
                    style: {
                        backgroundColor: colors.primary,
                    },
                },
            }),
        },
    }, {
        initialRouteName: usuarioLogado ? 'User' : 'Welcome',
        navigationOptions: {
            header: props => <Header {...props} />,
        },
    })
);

export default createRootNavigator;
