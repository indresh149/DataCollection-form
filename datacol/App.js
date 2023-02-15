/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import "./ignorewarnings";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  useContext
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/SignInScreens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Navigation from './src/navigation';


const App = () => {

  return(
   
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
    
  );
  };

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;
