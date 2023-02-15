import { View, Text ,useContext,ActivityIndicator} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { AuthContext } from '../context/AuthContext';


const Navigation = () => {
  const Stack = createNativeStackNavigator();
  

  
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    
   
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default Navigation