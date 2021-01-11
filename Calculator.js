/* eslint-disable no-new-func */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const YourApp = () => {
  const [output, setOutput] = useState('0');
  const getOutput = (x) => {
    let data = output;
    if (data == '0') {
      data = '';
      data += x;
    } else {
      data += x;
    }
    setOutput(data);
  };
  const evil = (data) => {
    return new Function('return ' + data)();
  };
  const cal = () => {
    let data = output;
    setOutput(evil(data));
  };
  const clear = () => {
    setOutput(0);
  };

  const NumberItem = ({ value, onPress, styles, styleText }) => {
    const getOutputt = () => {
      onPress && onPress(value);
    };
    return (
      <TouchableOpacity onPress={getOutputt} style={[{}, styles]}>
        <Text style={[{}, styleText]}>{value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultOutput}>{output}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.touchableClear} onPress={() => clear()}>
          <Text style={styles.textClear}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberStyle} onPress={() => getOutput('/')}>
          <Text style={styles.divideStyle}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <NumberItem
          value={7}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={8}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={9}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={'-'}
          onPress={getOutput}
          styles={styles.calStyle}
          styleText={styles.textItem}
        />
      </View>

      <View style={styles.row}>
        <NumberItem
          value={4}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={5}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={6}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={'+'}
          onPress={getOutput}
          styles={styles.calStyle}
          styleText={styles.textItem}
        />
      </View>

      <View style={styles.row}>
        <NumberItem
          value={1}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={2}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={3}
          onPress={getOutput}
          styles={styles.touchableStyle}
          styleText={styles.textItem}
        />
        <NumberItem
          value={'='}
          onPress={cal}
          styles={styles.calStyle}
          styleText={styles.textItem}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    width: '100%',
    height: '20%',
    backgroundColor: '#330000',
    justifyContent: 'center',
  },
  resultOutput: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    height: '20%',
  },
  touchableClear: {
    width: '75%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderColor: '#330000',
    borderWidth: 2,
  },
  textClear: {
    fontSize: 60,
    textAlign: 'center',
  },
  numberStyle: {
    width: '25%',
    fontSize: 60,
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    borderColor: '#330000',
    borderWidth: 2,
  },
  divideStyle: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
  },
  touchableStyle: {
    width: '25%',
    justifyContent: 'center',
    borderColor: '#330000',
    borderWidth: 2,
  },
  calStyle: {
    width: '25%',
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    borderColor: '#330000',
    borderWidth: 2,
  },
  textItem: {
    fontSize: 60,
    textAlign: 'center',
  },
});

export default YourApp;
