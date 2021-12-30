import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/ReviewDetail';
import Home from '../screens/Home';
import {globalStyles} from '../styles/globals'

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
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' } } />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Revide details Screen'}} />
      </Stack.Navigator>
  );
}

export default HomeNavigation;