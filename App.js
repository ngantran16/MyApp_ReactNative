import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Todo from './TodoList';
import Calculator from './Calculator';
import SignUp from './SignUp';
import EnouvoInto from './EnouvoEvent/Enouvo';
import EnouvoDetail from './EnouvoEvent/EnouvoDetail';
import ReduxApp from './ReduxApp';
import TodoRedux from './TodoRedux/TodoProvider';
// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.button}>
        <Button
          title="Todo"
          color="#87CEFF"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Todo',
                options: {
                  topBar: {
                    title: {
                      text: 'Todo',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Cal"
          color="#00B2EE"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Calculator',
                options: {
                  topBar: {
                    title: {
                      text: 'Calculator',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="SignUp"
          color="#009ACD"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'SignUp',
                options: {
                  topBar: {
                    title: {
                      text: 'SignUp',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Enouvo"
          color="#87CEEB"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'EnouvoInto',
                options: {
                  topBar: {
                    title: {
                      text: 'EnouvoInto',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Redux"
          color="#00688B"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Counter',
                options: {
                  topBar: {
                    title: {
                      text: 'Redux',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="TodoRedux"
          color="#27408B"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'TodoRedux',
                options: {
                  topBar: {
                    title: {
                      text: 'TodoRedux',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#00008B',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Todo', () => Todo);
Navigation.registerComponent('Calculator', () => Calculator);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('EnouvoInto', () => EnouvoInto);
Navigation.registerComponent('enouvodetail', () => EnouvoDetail);
Navigation.registerComponent('Counter', () => ReduxApp);
Navigation.registerComponent('TodoRedux', () => TodoRedux);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MyStack',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: 250,
    marginLeft: 60,
  },
});
