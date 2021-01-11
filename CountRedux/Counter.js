/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-undef */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from './store/actions';

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const counter = data;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addition());
        }}
        style={styles.button}
      >
        <Text style={styles.title}> ADD</Text>
      </TouchableOpacity>
      <Text style={styles.counterStyle}>{counter}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(subtraction());
        }}
        style={styles.button}
      >
        <Text style={styles.title}> SUBTRACT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#990000',
    fontWeight: 'bold',
  },
  counterStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
