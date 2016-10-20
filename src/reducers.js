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

const exportHTML = (state = false, { type }) => {
  switch (type) {
    case 'TOGGLE_EXPORT':
      return !state;
    default:
      return state;
  }
}

const downloadLink = (state = '', action) => {
  switch (action.type) {
    case 'SET_DOWNLOAD':
      return action.url;
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
    case 'ADD_COMPONENTS':
      const { components } = action
      let newState = {...state}
      components.forEach(component =>
        newState = {...add(newState, component)}
      )
      return newState;
    case 'UPDATE_COMPONENT':
      const { id, update } = action;
      return { ...state, [id]: {...state[id], ...update} };
    default:
      return state;
  }
};

module.exports = combineReducers({
  activePage,
  components,
  visibleTools,
  editComponent,
  form,
  exportHTML,
  downloadLink
});

const add = ( state, action ) => {
  let newState = {...state};
  // add this component's id to it's parent's children array
  const { parent, component } = action;
  if (parent && typeof newState[parent.id] !== 'undefined') {
    const id = parent.id;
    const newParent = {...newState[id],
      children: [...newState[id].children, {id: component.id}]
    };
    component.parentID = id;
    newState = {...newState, [id]: newParent};
  }
  // then add this component to the state
  newState = { ...newState, [component.id]: component };
  return newState;
}
