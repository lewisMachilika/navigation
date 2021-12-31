import React from 'react';
import { View,Text,Image, StyleSheet} from 'react-native';
import Card from '../shared/Card';
import {globalStyles,images} from '../styles/globals'
const ReviewDetails = ({navigation, route: { params }})=>{
    //{ route: { params } }
    //console.log(navigation.getState().routes[1].params.body)
    return(
        <View style={globalStyles.container}>
            <Card >
                <Text style={globalStyles.text}>{params.title}</Text>
                <Text>{params.body}</Text>
                <View style={styles.imageContainer}>
                    <Text>Rating:</Text>
                    <Image style={styles.image} source={images[params.rating]}/>
                </View>
                
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50,
        // position: 'absolute',
        // left: 50,
        top: -12
    },
    imageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
});
export default ReviewDetails;