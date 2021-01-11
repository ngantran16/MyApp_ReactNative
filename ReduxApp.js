import React from 'react';
import { Provider } from 'react-redux';
import Counter from './CountRedux/Counter';
import { store } from './CountRedux/store/store';

const ReduxApp = (props) => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default ReduxApp;
