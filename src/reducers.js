const { combineReducers } = require('redux');
const uuid = require('uuid-v4');

const pages = (state = [], action) => {
  switch (action.type) {
    case 'VIEW_PAGE':
      const currentActive = state.findIndex(({ active }) => active);
      const newActive = state.findIndex(({ id }) => id === action.id);

      if (currentActive === newActive || newActive === -1) return state;

      return state.map((page, index) => {
        if (index === currentActive) return { ...page, active: false }
        if (index === newActive) return { ...page, active: true }
        return page;
      });
    case 'NEW_PAGE':
      const page = {id: uuid(), title: 'Untitled', children: [], active: false, ...action.page};
      return [...state, page];
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

module.exports = combineReducers({ pages, components });
