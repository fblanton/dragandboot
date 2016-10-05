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

      // add this component's id to it's parent's children array
      if (
        typeof action.parent !== 'undefined' &&
        typeof state[action.parent.id] !== 'undefined'
      ) {
        const id = action.parent.id;
        const oldParent = state[id];
        const newParent = {...oldParent,
          children: [...oldParent.children, {id: action.component.id}]
        };
        newState = {...newState, [id]: newParent};
      }

      // then add this component to the state
      return { ...newState, [action.component.id]: action.component };
    default:
      return state;
  }
};

module.exports = combineReducers({ activePage, components, visibleTools });
