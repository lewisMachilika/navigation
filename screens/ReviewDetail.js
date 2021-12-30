import React from 'react';
import { View,Text} from 'react-native';
import {globalStyles} from '../styles/globals'
export default function ReviewDetails ({navigation, route: { params }}){
    //{ route: { params } }
    //console.log(navigation.getState().routes[1].params.body)
    return(
        <View style={globalStyles.container}>
            <Text>{params.title}</Text>
            <Text>{params.body}</Text>
            <Text>{params.rating}</Text>
        </View>
    );
}
//export default ReviewDetails;