import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

const formatDate = ms => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

const Note = ({ item, onPress }) => {
  const { title, desc, time } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.desc} numberOfLines={2}>{desc}</Text>
      <Text style={styles.time}>{time.isUpdated
        ? `Last Updated at ${formatDate(time)}`
        : `Last Update at ${formatDate(time)}`}
      </Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rosybrown',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    paddingBottom: 5,
  },
  desc: {
    textAlign: 'left',
    fontSize: 16,
    color: 'mistyrose',
  },
  time: {
    marginTop: 15,
    textAlign: 'right',
    fontSize: 12,
    opacity: 0.5,
  },
});

export default Note;
