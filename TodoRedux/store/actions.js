import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

export const add_todo = (message) => ({
  type: ADD_TODO,
  message: message,
  completed: false,
});

export const delete_todo = (index) => ({
  type: DELETE_TODO,
  index: index,
});

export const complete_todo = (index) => ({
  type: COMPLETE_TODO,
  index: index,
});
