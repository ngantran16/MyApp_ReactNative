import { create } from 'react-test-renderer';
import { createStore } from 'redux';
import { mainReducer } from './reducers';

export const store = createStore(mainReducer);
