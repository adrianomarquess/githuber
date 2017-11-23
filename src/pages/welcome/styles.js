import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },

    welcomeTitle: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.white,
    },

    welcomeDescription: {
        color: colors.white,
        fontSize: fonts.regular,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: 'center',
        lineHeight: 21,
    },

    input: {
        backgroundColor: colors.white,
        alignSelf: 'stretch',
        height: 44,
        marginTop: 10,
        fontSize: fonts.small,
        paddingHorizontal: 20,
    },

    button: {
        backgroundColor: colors.secondary,
        alignSelf: 'stretch',
        height: 44,
        marginTop: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: fonts.small,
        fontWeight: 'bold',
        color: colors.white,
    },

    error: {
        color: colors.error,
        marginTop: 10,
        fontSize: fonts.small,
    },
});

export default styles;
