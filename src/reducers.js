const { combineReducers } = require('redux');

const pages = (state = [{id: 0}], action) => {
  switch (action.type) {
    case 'NEW_PAGE':
      return [...state, action.page];
    default:
      return state;
  }
}

const hellos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.text];
    case 'ADD_COMPONENT':
      return [...state, action.text];
    default:
      return state;
  }
};

module.exports = combineReducers({ pages, hellos });
