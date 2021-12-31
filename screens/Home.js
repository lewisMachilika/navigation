import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globals'
import Card from '../shared/Card';
const Home =({navigation})=>{
    const [reviews, setReviews]= useState([
        {title:"testing native", rating:7, body:"lorem ipsum", key:1},
        {title:"high way", rating:8, body:"lorem ipsum", key:2},
        {title:"You're breaking new ground", rating:9, body:"but all you have given me", key:3},
        {title:"I surrender", rating:10, body:"in the crushing", key:4},
        {title:"Bring new wine", rating:8, body:"Forgive my sins", key:5},
        {title:"I came here with nothing", rating:9, body:"enough i enough", key:6},
    ])
    return(
        <View style={globalStyles.container}>
            {/*<Text style={globalStyles.text}>Home screen</Text>*/}
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Card>
                            <Text style={globalStyles.text}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;