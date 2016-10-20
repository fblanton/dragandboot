const addComponents = (components, parent) => {
  let action = { type: 'ADD_COMPONENTS' }
  if (!Array.isArray(components)) {
    action.components = [components]
    parent ? components.parent = { id: parent } : null;
  } else {
    action.components = components;
  }
  return action;
};
const remove = text => ({ type: 'REMOVE', text });

module.exports = {
  addComponents
};
