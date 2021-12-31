import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/ReviewDetail';
import Home from '../screens/Home';
import {globalStyles} from '../styles/globals'
import Header from '../shared/Header'

const Stack = createNativeStackNavigator();

const HomeNavigation = ()=> {
  return (
      <Stack.Navigator initialRouteName="Home"    
        screenOptions={{
                headerStyle:globalStyles.header,
                headerTitleAlign:'center',
               // headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} options={({navigation})=>{ return {headerTitle:()=><Header navigation={navigation} title='Home'/> }}} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={ { title:'Review details'}} />
      </Stack.Navigator>
  );
}

export default HomeNavigation;