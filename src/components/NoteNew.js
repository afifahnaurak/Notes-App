import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Modal, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity} from 'react-native';
import RoundIconBtn from './RoundIconBtn';
import { AntDesign } from '@expo/vector-icons';

const NoteNew = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

  return (
    <>
      <StatusBar />
      <Modal visible={visible} animationType='fade'>
        <View style={styles.container}>
        <View style={styles.topContainer}>
          <AntDesign 
            position= 'absolute'
            name='arrowleft' 
            size={24} 
            color='black'
            onPress={closeModal}
            style={styles.arrow}
          />
          <Text style={styles.header}>{`New Note`}</Text>
        </View>
          <TextInput
            value={title}
            multiline
            placeholder='Title'
            style={[styles.input, styles.title]}
            onChangeText={text => handleOnChangeText(text, 'title')}
          />
          <TextInput
            value={desc}
            multiline
            placeholder='Type Here..'
            style={[styles.input, styles.desc]}
            onChangeText={text => handleOnChangeText(text, 'desc')}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            onPress={handleSubmit}
          >
            <Text style={styles.TextStyle}>Done</Text>
          </TouchableOpacity>
            {title.trim() || desc.trim() ? (
              <RoundIconBtn
                size={20}
                style={{ marginTop: 17, backgroundColor: 'brown', marginLeft: 15 }}
                antIconName='close'
                onPress={closeModal}
              />
            ) : null}
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'rosybrown',
    fontSize: 20,
    color: 'dimgrey',
  },
  topContainer: {
    flexDirection: 'row',
  },
  SubmitButtonStyle: {
    marginTop:15,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:20,
    paddingRight: 20,
    backgroundColor:'black',
    borderRadius:25,
    borderColor: '#fff'
  },
  TextStyle:{
    fontSize: 20,
    color:'white',
    textAlign:'center',
  },
  header: {
    paddingLeft: 95,
    fontSize: 30,
    fontWeight: 'bold',
  },
  arrow: {
    paddingTop: 8,
  },
  title: {
    height: 80,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  desc: {
    height: 80,
  },
  done: {
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    position: 'absolute',
    flexDirection: 'row',
    right: 30,
    bottom: 30,
  },
});

export default NoteNew;
