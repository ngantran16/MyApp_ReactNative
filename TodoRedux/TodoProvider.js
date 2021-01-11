import React from 'react';
import { Provider } from 'react-redux';
import TodoRedux from '../TodoRedux/TodoList';
import { store } from './store/store';

const TodoProvider = (props) => {
  return (
    <Provider store={store}>
      <TodoRedux />
    </Provider>
  );
};

export default TodoProvider;
