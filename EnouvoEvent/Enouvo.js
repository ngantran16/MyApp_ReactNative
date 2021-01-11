/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { swipeData } from './data';
import EventItem from './components/EventItem';

const Enouvo = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Upcoming Event</Text>
      </View>
      {swipeData.map((item, key) => (
        <EventItem
          key={key.toString()}
          idComponent="StackNav"
          imageUri={item.imageUrl}
          time={item.date.en}
          title={item.nameEvent}
          address={item.address.en}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default Enouvo;
