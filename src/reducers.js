const { combineReducers } = require('redux');
const { reducer: form } = require('redux-form');

const uuid = require('uuid-v4');

const activePage = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return action.id;
    default:
      return state;
  }
}

const editComponent = (state = '', { type, id }) => {
  switch (type) {
    case 'EDIT_COMPONENT':
      return (state === '' || id === '') ? id : state;
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
      const { parent, component } = action;

      let newState = {...state};

      // add this component's id to it's parent's children array
      if (
        typeof parent !== 'undefined' &&
        typeof state[parent.id] !== 'undefined'
      ) {
        const id = parent.id;
        const oldParent = state[id];
        const newParent = {...oldParent,
          children: [...oldParent.children, {id: component.id}]
        };
        newState = {...newState, [id]: newParent};
        component.parentID = parent.id;
      }
      // then add this component to the state
      return { ...newState, [component.id]: component };
    case 'UPDATE_COMPONENT':
      const { id, update } = action;
      const updatedComponent = {...state[id], ...update};

      return { ...state, [id]: updatedComponent }
    default:
      return state;
  }
};

module.exports = combineReducers({ activePage, components, visibleTools, editComponent, form });
