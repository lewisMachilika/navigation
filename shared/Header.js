import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
export default Header=({navigation,title})=>{
    const openMenu = () =>{
        navigation.toggleDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} style={styles.menu} size={28}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    menu:{
        position: 'absolute',
        left: 5
    }
})
