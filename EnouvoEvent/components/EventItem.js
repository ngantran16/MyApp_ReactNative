/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const EventItem = (props) => {
  return (
    <View>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() =>
            Navigation.push('MyStack', {
              component: {
                name: 'enouvodetail',
              },
            })
          }
        >
          <Image
            source={{
              uri: props.imageUri,
            }}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.dayText}>{props.time}</Text>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.addressText}>{props.address}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  dayText: {
    textAlign: 'left',
    marginLeft: 20,
    color: 'red',
  },
  titleText: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  addressText: {
    marginLeft: 20,
    color: 'gray',
    marginBottom: 20,
  },
  imageStyle: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  touchableStyle: {
    width: '90%',
    height: 150,
  },
});
export default EventItem;
