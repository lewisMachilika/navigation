import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontFamily:'ubuntu-regular',
        fontSize:20,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    header: {
        backgroundColor: '#ddd'
    },
  });

  export const images = StyleSheet.create({
    "7": require("../assets/7.png"),
    "8": require("../assets/8.png"),
    "9": require("../assets/9.png"),
    "10": require("../assets/10.png"),

  });
