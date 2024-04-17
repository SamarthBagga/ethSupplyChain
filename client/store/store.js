import { createStore } from 'redux';

// Initial state
const initialState = {
  currentContractAddress: '',
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CONTRACT_ADDRESS':
      return {
        ...state,
        currentContractAddress: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
