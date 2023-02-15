import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import {useNavigation} from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CustomDropDownEdu from '../../components/CustomDropdownEdu/CustomDropDownEdu';
import CheckBox from 'react-native-check-box';
import CustomDropDownLang from '../../components/CustomDropDownLang';


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'Android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    let date = day + '/' + month + '/' + year;
    setText(date);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [value, setValue] = useState(0);
  const items = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 },
  ]

  const [valuems, setValuems] = useState(0);
  const itemsms = [
    { label: "Married", value: 0 },
    { label: "Unmarried", value: 1 },
    { label: "Other", value: 2 },
  ]

  const [valuecr, setValuecr] = useState(1);
  const itemscr = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ]

  const [isChecked, setIsChecked] = useState({
    Hindi: false,
    English: false,
    Urdu: false,
    Bengali: false,
  });

  // const navigation = useNavigation();

  const onRegisterPressed = () => {
    //console.warn('Sign Up Pressed');
    //navigation.navigate('ConfirmEmail');
  }

  const onSignInPressed = () => {
    //console.warn('Sign In Pressed');
    //navigation.navigate('SignIn');
  }

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use Pressed');
    //navigation.navigate('TermsOfUse');
  }

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy Pressed');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="First Name"
          control={control}
          placeholder="First Name*"
          rules={{
            required: 'First Name is required',
            minLength: {
              value: 2,
              message: 'First Name should be at least 2 characters long',
            },
            maxLength: {
              value: 50,
              message: 'First Name should be at most 50 characters long',
            },
          }}
        />

        <CustomInput
          name="Middle Name"
          control={control}
          placeholder="Middle Name"
        />

        <CustomInput
          name="Last Name"
          control={control}
          placeholder="Last Name*"
          rules={{
            required: 'Last Name is required',
            minLength: {
              value: 2,
              message: 'Last Name should be at least 2 characters long',
            },
            maxLength: {
              value: 50,
              message: 'Last Name should be at most 50 characters long',
            },
          }}
        />

        <CustomInput
          name="Phone Number"
          placeholder="Phone Number*"
          control={control}
          rules={{ required: 'Phone Number is required' }}
        />

        <CustomInput
          name="Alt Number"
          placeholder="Alt. Ph. Number"
          control={control}
        />


        <Text style={styles.smalltitles}>
          Address
        </Text>
        <TextInput
          style={styles.multilineinput}
          placeholder="Street Address, City, State, Pin Code"
          multiline
          numberOfLines={3}
        />


        <Text style={styles.smalltitlesPermanent}>
          Permanent Address
        </Text>

        <TextInput
          style={styles.multilineinput}
          placeholder="Street Address, City, State, Pin Code"
          multiline
          numberOfLines={3}
        />

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{ pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}
        />

        <Pressable
          onPress={() => showMode('date')}
        >
          {
            /*
            {({ pressed }) => (
              <Text style={styles.touchtextbutton}>{pressed ? { text } : 'Date of Birth'}</Text>
            )}
            */
          }
        </Pressable>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',
          fontSize: 14,
          marginTop: 10,
          marginRight: 216
        }}>
          Select your Gender
        </Text>
        <RadioForm
          radio_props={items}
          initial={value}
          onPress={(value) => setValue(value)}
          buttonColor="blue"
          selectedButtonColor="green"
          selectedLabelColor="red"
          buttonSize={10}
          buttonOuterSize={20}
          labelColor="blue"
          labelHorizontal={false}
          formHorizontal={true}
          labelStyle={{ fontSize: 14, color: 'black', fontFamily: 'zwodrei Bold' }}
        />

        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',
          fontSize: 14,
          marginTop: 10,
          marginRight: 240
        }}>
          Marital Status
        </Text>
        <RadioForm
          radio_props={itemsms}
          initial={valuems}
          onPress={(valuems) => setValuems(valuems)}
          buttonColor="blue"
          selectedButtonColor="green"
          selectedLabelColor="red"
          buttonSize={10}
          buttonOuterSize={20}
          labelColor="blue"
          labelHorizontal={false}
          formHorizontal={true}
          labelStyle={{ fontSize: 14, color: 'black', fontFamily: 'zwodrei Bold' }}
        />

        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',

          fontSize: 14,
          marginTop: 10,
          marginRight: 240
        }}>
          Criminal Record
        </Text>
        <RadioForm
          radio_props={itemscr}
          initial={valuecr}
          onPress={(valuecr) => setValuecr(valuecr)}
          buttonColor="blue"
          selectedButtonColor="green"
          selectedLabelColor="red"

          buttonSize={10}
          buttonOuterSize={20}
          labelColor="blue"
          labelHorizontal={false}
          formHorizontal={true}
          labelStyle={{ fontSize: 14, color: 'black', fontFamily: 'zwodrei Bold' }}
        />

        <TextInput
          style={styles.multilineinput}
          placeholder="Criminal Record Discrption if selected Yes"
          multiline
          numberOfLines={3}
        />


        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',
          fontSize: 14,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 150
        }}>
          Highest education qualification
        </Text>
        <CustomDropDownEdu
        />

        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',
          fontSize: 14,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 220
        }}>
          Primary Language
        </Text>
        <CustomDropDownLang
        />

        <Text style={{
          color: 'black',
          fontFamily: 'zwodrei Bold',
          fontSize: 14,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 150
        }}>
          Other Know languages
        </Text>
        <CheckBox
          style={{
            flex: 1,
            width: '100%',
            marginBottom: 10
          }}
          isChecked={isChecked.Hindi}
          onClick={() => setIsChecked({ ...isChecked, Hindi: !isChecked.Hindi })}
          rightText="Hindi"
          rightTextStyle={{ fontSize: 16, color: isChecked.Hindi ? 'green' : 'black', fontFamily: 'zwodrei Bold' }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="black"
        />

        <CheckBox
          style={{
            flex: 1,
            width: '100%',
            marginBottom: 10
          }}
          isChecked={isChecked.English}
          onClick={() => setIsChecked({ ...isChecked, English: !isChecked.English })}
          rightText="English"
          rightTextStyle={{ fontSize: 16, color: isChecked.English ? 'green' : 'black', fontFamily: 'zwodrei Bold' }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="black"
        />

        <CheckBox
          style={{
            flex: 1,
            width: '100%',
            marginBottom: 10
          }}
          isChecked={isChecked.Urdu}
          onClick={() => setIsChecked({ ...isChecked, Urdu: !isChecked.Urdu })}
          rightText="Urdu"
          rightTextStyle={{ fontSize: 16, color: isChecked.Urdu ? 'green' : 'black', fontFamily: 'zwodrei Bold' }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="black"
        />


        <CheckBox
          style={{
            flex: 1,
            width: '100%',
            marginBottom: 10
          }}
          isChecked={isChecked.Bengali}
          onClick={() => setIsChecked({ ...isChecked, Bengali: !isChecked.Bengali })}
          rightText="Bengali"
          rightTextStyle={{ fontSize: 16, color: isChecked.Bengali ? 'green' : 'black', fontFamily: 'zwodrei Bold' }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="black"
        />



        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />



        <CustomButton
          text="Already have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'white',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  smalltitles: {
    fontSize: 20,
    fontFamily: "zwodrei Bold",
    // fontWeight: 'bold',
    color: '#02091c',
    paddingRight: 255,
    margin: 10,
  },
  extrasmalltitles: {
    fontSize: 12,
    fontFamily: "zwodrei Bold",
    color: '#02091c',
    paddingRight: 250,
    margin: 10,
  },
  smalltitlesPermanent: {
    fontSize: 20,
    fontFamily: "zwodrei Bold",
    color: '#02091c',
    paddingRight: 150,
    margin: 10,
  },
  touchtextbutton: {
    height: 40,
    width: 350,
    backgroundColor: 'white',

    paddingTop: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  multilineinput: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,


  },
});


export default SignUpScreen