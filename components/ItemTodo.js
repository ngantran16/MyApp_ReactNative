import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import trash from '../images/delete.png';
import check from '../images/check.png';
import noncheck from '../images/noncheck.png';

const ItemTodo = ({ item, onCheckClicked, onTrashClicked }) => (
  <View style={styles.item}>
    <TouchableOpacity
      style={styles.tickImage}
      onPress={() => {
        onCheckClicked(item.id);
      }}
    >
      <Image source={item.status ? check : noncheck} />
    </TouchableOpacity>

    <Text style={item.status ? styles.titleDone : styles.title}>{item.title}</Text>
    <TouchableOpacity
      style={styles.trashImage}
      onPress={() => {
        onTrashClicked(item.id);
      }}
    >
      <Image source={trash} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tickImage: {
    width: '8%',
    height: '100%',
    marginRight: 10,
  },
  trashImage: {
    width: '8%',
    height: '100%',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    width: '80%',
    height: '100%',
  },
  titleDone: {
    fontSize: 20,
    width: '80%',
    height: '100%',
    textDecorationLine: 'line-through',
  },
});
export default ItemTodo;
