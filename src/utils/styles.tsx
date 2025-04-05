import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewBox: {
        gap: 20,
        margin: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    styleBox: {
        backgroundColor: 'skyblue', // 👈 Just this changes background color
        width: 100,
        height: 100,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    styleText: {
        // flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 12,
        fontWeight: 'normal',
    },
    styleButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });

export default style;
