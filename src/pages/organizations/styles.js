import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    contentContainer: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    loading: {
        marginTop: 10,
    },

    empty: {
        color: colors.error,
        marginTop: 10,
        fontSize: fonts.small,
    },
});

export default styles;
