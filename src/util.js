const React = require('react');
const componentMap = require('./componentMap');

const handleDoubleClick = (e, dispatch, id) => {
  dispatch({type: 'EDIT_COMPONENT', id})
  e.stopPropagation();
};

// return an object constisting of the filter, it's parent and it's children
const filterComponents = (components, filter) => {
  const component = components[filter];
  const children = component.children.map(({ id }) => id);
  const returnComponents = {[filter]: component, [component.parentID]: components[component.parentID]}

  return children.reduce(
    (current, next) =>
      (typeof next !== 'undefined') ? ({...current, [next]: components[next]}) : current
    , returnComponents
  );
}

const expandChildren = (children, components, dispatch) => children.map(
  (child, index) => {
    if (typeof child === 'string') return child;

    const { id: childID } = child;

    if (typeof components[childID] !== 'undefined') {
      const { children, type, id, parentID, ...rest } = components[childID];
      const Component = componentMap(components[id].type);

      return (
        <Component
          {...rest}
          key={ index }
          data-id={ id }
          onDoubleClick={ (e) => handleDoubleClick(e, dispatch, id) }
        >
          { expandChildren(children, components, dispatch) }
        </Component>
      );
    } else {
      console.log('Having issues, child: ', id, 'c[child]: ', components[id], 'typeof child: ', typeof child);
      return;
    }
  }
);

module.exports = {
  expandChildren,
  filterComponents
}
