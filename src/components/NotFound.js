import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Image source={require('../../assets/notfound.png') } style={{width: 100, height: 100}} /> 
      <Text style={{ marginTop: 20, fontSize: 20, color:'dimgrey' }}>Sorry! No Results Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    zIndex: -1,
  },
});

export default NotFound;
