import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';

const initialState = {
  listTodo: [
    {
      id: 1,
      message: 'First Item',
      completed: false,
    },
    {
      id: 2,
      message: 'Second Item',
      completed: false,
    },
    {
      id: 3,
      message: 'Third Item',
      completed: true,
    },
  ],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        listTodo: state.listTodo.concat({
          id: Math.floor(Math.random() * 1000),
          message: action.message,
          completed: false,
        }),
      };
    case DELETE_TODO:
      state.listTodo.splice(action.index, 1);
      break;
    case COMPLETE_TODO:
      return {
        ...state,
        listTodo: (state.listTodo[action.index].completed = !state.listTodo[action.index]
          .completed),
      };
    default:
      break;
  }
  return state;
};
