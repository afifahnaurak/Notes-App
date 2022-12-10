import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/Login';
import NoteScreen from './src/NoteScreen';
import NoteDetail from './src/components/NoteDetail';
import NoteSource from './src/NoteSource';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

  return (
    <NavigationContainer>
      <NoteSource>
        <Stack.Navigator
          screenOptions={{ headerTitle: '', headerTransparent: true }}
        >
          <Stack.Screen component={Login} name='Login' />
          <Stack.Screen component={renderNoteScreen} name='NoteScreen' />
          <Stack.Screen component={NoteDetail} name='NoteDetail' />
        </Stack.Navigator>
      </NoteSource>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
