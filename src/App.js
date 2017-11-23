import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';
import 'config/ReactotronConfig';

export default class App extends Component {
    state = {
        usuarioLogado: false,
        userChecked: false,
    }

    componentWillMount() {
        this.checkUser().then((response) => {
            this.setState({ usuarioLogado: response, userChecked: true });
        });
    }

    checkUser = async () => {
        const user = await AsyncStorage.getItem('@Githuber:username');
        return user !== null;
    };

    render() {
        const { usuarioLogado, userChecked } = this.state;

        if (!userChecked) return null;

        const Layout = createRootNavigator(usuarioLogado);
        return <Layout />;
    }
}
