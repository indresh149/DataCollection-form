import { View, Text,Image ,StyleSheet,useWindowDimensions, ScrollView, TextInput, ActivityIndicator} from 'react-native'
import React,{useState,useEffect,useRef,useContext} from 'react'
import Logo from '../../../assets/images/logo-vector.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'
import {useForm,Controller} from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';



const SignInScreen = () => {
 

  const {height} = useWindowDimensions();

  const animationRef = useRef()

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  

  const onSignInPressed = (data) => {
    console.log(data);
    //console.warn('Sign In Pressed');

    //validate user
    navigation.navigate('SignUpScreen');
  }

  const onForgotPasswordPressed = () => {
    //console.warn('Forgot Password Pressed');
    //navigation.navigate('ForgotPassword');
  }

  const onSignUpPressed = () => {
    //console.warn('Sign Up Pressed');
   // navigation.navigate('SignUp');
  }


  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
    

      <Image source = {Logo} style = {[styles.logo,{height:height*0.3},{marginBottom:60}]} 
      resizeMode="contain"
      />

      <CustomInput
      name = "Email"
       placeholder = "Email" 
       control={control}
       rules = {{required: 'Email is required'}}
       
       />

      <CustomInput 
      name = "password"
      placeholder = "Password" 
      secureTextEntry
      control={control}
      rules = {{required: 'Password is required',minLength:{value: 3,message: 'Password should be minimum 3 characters long'}}}
     
      />
   

      <CustomButton 
      text = "Sign In" 
      onPress={handleSubmit(onSignInPressed)} 
      />
      <CustomButton 
      text = "Forgot password" 
      onPress={onForgotPasswordPressed} 
      type = "TERTIARY" 
      />
      
      <CustomButton 
      text = "Don't have an account? Create one" 
      onPress={onSignUpPressed} 
      type = "TERTIARY" 
      />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding : 20,
    //backgroundColor: 'white',
  },
  logo: {
    width: '80%',
    maxWidth: 1000,
    maxHeight:200,

    
  },
});


export default SignInScreen