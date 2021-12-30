import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from '../styles/globals'
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const HomeNavigation = ()=> {
  return (
      <Stack.Navigator    
        screenOptions={{
                headerStyle:globalStyles.header,
                headerTitleAlign:'center',
                headerShown: false
        }}
      >
        <Stack.Screen name="Abount" component={About} options={{ title: 'About' } } />
      </Stack.Navigator>
  );
}

export default HomeNavigation;