const { createStore } = require('redux');

const appReducer = (state = ['Hello'], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};

module.exports = createStore(appReducer);
