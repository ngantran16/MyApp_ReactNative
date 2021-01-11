/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add_todo, delete_todo, complete_todo } from './store/actions';
import plus from '../images/plus.png';
import Item from './ItemTodo';

const TodoList = () => {
  const data = useSelector((state) => state.listTodo);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter todo"
          clearTextOnFocus="true"
          onChangeText={(val) => setTodoTitle(val)}
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            dispatch(add_todo(todoTitle));
          }}
        >
          <Image source={plus} style={styles.appButtonText} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ top: 30 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    height: 43,
    borderColor: 'gray',
    borderWidth: 1,
    width: 380,
    marginLeft: 15,
    borderRadius: 10,
  },
  appButtonContainer: {
    width: 60,
    left: 234,
    height: 40,
    marginTop: -41,
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 100,
    borderRadius: 5,
  },
  appButtonText: {
    alignSelf: 'center',
  },
});

export default TodoList;
