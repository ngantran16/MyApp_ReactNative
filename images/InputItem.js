import React, {useState} from 'react';
import { View ,Text,StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
const InputItem = ({value, styles, onChangeText}) => {
    return (
      <View>
          <Text>{value}</Text>
          <TextInput 
            style={[{}, styles]}
            onChangeText={onChangeText}
          />
      </View>
    );
  };
  export default InputItem;