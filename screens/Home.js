import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globals'
const Home =({navigation})=>{
    const [reviews, setReviews]= useState([
        {title:"testing native", rating:5, body:"lorem ipsum", key:1},
        {title:"high way", rating:4, body:"lorem ipsum", key:2},
        {title:"Eliza good girls", rating:6, body:"she needs cholate", key:3},
        {title:"Judith loves money", rating:8, body:"she need to be fucked", key:4},
        {title:"Sarah is not responding", rating:3, body:"She will be cheated on", key:5},
        {title:"Tinker has bums", rating:7, body:"She will be fucked as well", key:6},
    ])
    return(
        <View style={globalStyles.container}>
            {/*<Text style={globalStyles.text}>Home screen</Text>*/}
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.text}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;