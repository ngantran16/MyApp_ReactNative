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
import plus from './images/plus.png';
import Item from './components/ItemTodo.js';

const TodoList = () => {
  const onCheckClicked = (itemId) => {
    let result = [...DATA];
    result.map((item, key) => {
      if (item.id === itemId) {
        item.status = !item.status;
        setData(result);
      }
    });
  };

  const onTrashClicked = (itemId) => {
    console.log(itemId);
    let result = [...DATA];
    result.map((item, key) => {
      if (item.id === itemId) {
        result.splice(key, 1);
      }
    });
    setData(result);
  };

  const [todoTitle, setTodoTitle] = useState('');
  const [DATA, setData] = useState([
    {
      id: 1,
      title: 'First Item',
      status: false,
    },
    {
      id: 2,
      title: 'Second Item',
      status: false,
    },
    {
      id: 3,
      title: 'Third Item',
      status: true,
    },
  ]);
  const renderItem = ({ item }) => (
    <Item item={item} onCheckClicked={onCheckClicked} onTrashClicked={onTrashClicked} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter todo"
          onChangeText={(val) => setTodoTitle(val)}
        />
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            setData([
              ...DATA,
              ...[{ id: Math.floor(Math.random() * 1000), title: todoTitle, status: false }],
            ]);
          }}
        >
          <Image source={plus} style={styles.appButtonText} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
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
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default TodoList;
