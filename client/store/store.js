import { createStore } from 'redux';

// Initial state
const initialState = {
  currentContract: '',
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CONTRACT':
      return {
        ...state,
        currentContract: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
