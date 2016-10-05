const { combineReducers } = require('redux');
const uuid = require('uuid-v4');

const activePage = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return action.id;
    default:
      return state;
  }
}

const visibleTools = (state = 'all', action) => {
  switch (action.type) {
    case 'TOOL_VISIBILITY':
      return action.visible;
    default:
      return state;
  }
}

const components = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMPONENT':
      let newState = {...state};

      if (
        typeof action.parent !== 'undefined' &&
        typeof state[action.parent.id] !== 'undefined'
      ) {
        const parent = {
          ...state[action.parent.id],
          children: [...state[action.parent.id].children,
          {id: action.component.id}]
        };
        newState = {...newState, [action.parent.id]: parent};
      }

      return { ...newState, [action.component.id]: action.component };
    default:
      return state;
  }
};

module.exports = combineReducers({ activePage, components, visibleTools });
