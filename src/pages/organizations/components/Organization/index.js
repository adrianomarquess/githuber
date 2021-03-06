import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Organization extends PureComponent {
    static propTypes = {
        organization: PropTypes.shape({
            avatar_url: PropTypes.string,
            login: PropTypes.string,
        }).isRequired,
    };

    static defaultProps = { };

    render() {
        const { organization } = this.props;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: organization.avatar_url }}
                />
                <Text style={styles.title}>{organization.login}</Text>
            </View>
        );
    }
}
