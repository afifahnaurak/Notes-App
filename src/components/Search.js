import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <Image 
        source={require('../../assets/search.png') } 
        style={styles.searchIcon} 
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.search}
        
        placeholder='Type to search..'
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={'dimgrey'}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    borderWidth: 1.1,
    borderColor: 'grey',
    height: 40,
    borderRadius: 40,
    paddingLeft: 40,
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    width: 18, 
    height: 18,
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default Search;
