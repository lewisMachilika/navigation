import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from '../styles/globals'
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const AboutNavigation = ()=> {
  return (
      <Stack.Navigator    
        screenOptions={{
                headerStyle:globalStyles.header,
                headerTitleAlign:'center',
                //headerShown: false
        }}
      >
        <Stack.Screen name="About" component={About} options={({navigation})=>{ return {headerTitle:()=><Header navigation={navigation} title='About'/> }}} />
      </Stack.Navigator>
  );
}

export default AboutNavigation;