import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import RoundIconBtn from './components/RoundIconBtn';

const Login = ({ onFinish, navigation }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'username') setUserName(text);
    if (valueFor === 'password') setPassword(text);
  };

  const handleSubmit = async () => {
    const user = { name: username };
    const pass = { name: password };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('pass', JSON.stringify(pass));
    if (onFinish) onFinish();
    navigation.navigate('NoteScreen')
  };

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>{`Login`}</Text>
        <Image source={require('../assets/notes.png') } style={styles.img} />
        <Text style={styles.title}>{`Notes App`}</Text>
        <TextInput
          value={username}
          setvalue={setUserName}
          onChangeText={text => handleOnChangeText(text, 'username')}
          placeholder='Username'
          style={styles.textInput}
        />
        <TextInput
          value={password}
          setvalue={setPassword}
          onChangeText={text => handleOnChangeText(text, 'password')}
          placeholder='Password'
          secureTextEntry
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          onPress={handleSubmit}
        >
        <Text style={styles.TextStyle}>Login</Text>
        </TouchableOpacity>
    </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
    </>
  );
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingLeft: 8,
    fontSize: 35,
    fontWeight: 'bold',
  },
  img: {
    maxHeight: 170,
    maxWidth: 100,
    marginTop: 30,
    marginBottom: 15
  },
  title: {
    fontSize: 17,
    marginBottom: 40
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'silver',
    color: 'rodybrown',
    width,
    height: 50,
    borderRadius: 30,
    paddingLeft: 20,
    fontSize: 20,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 35,
    marginBottom: 5,
    fontSize: 20,
    opacity: 0.5,
  },
  SubmitButtonStyle: {
    marginTop: 15,
    marginBottom: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 155,
    paddingRight: 155,
    backgroundColor:'black',
    borderRadius: 30,
    borderColor: '#fff'
  },
  TextStyle:{
    fontSize: 20,
    color:'white',
    textAlign:'center',
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});

export default Login;
