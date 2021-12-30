import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as Fonts from 'expo-font'
import AppLoading from 'expo-app-loading';
import MyDrawer from './routes/Drawer';
import { NavigationContainer } from "@react-navigation/native";
const getFonts = () => {
  return Fonts.loadAsync({
    'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'pushster-regular': require('./assets/fonts/Pushster-Regular.ttf'),
    'iBMPlexMono-regular': require('./assets/fonts/IBMPlexMono-Regular.ttf')
  });
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
 
  if  (fontsLoaded)
    return (<NavigationContainer><MyDrawer/></NavigationContainer>);
  else
    return (<AppLoading startAsync={getFonts} onFinish={()=> setFontsLoaded(true)} onError={()=>{}}/>);
    //return (<About/>);

}

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
