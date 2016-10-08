const React = require('react');
const componentMap = require('./componentMap');
const Drops = require('./drop-components');
const reactstrap = require('reactstrap');

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

const expandChildren = (children, components, dispatch, exportHTML) => children.map(
  (child, index) => {
    if (typeof child === 'string') return child;

    const { id: childID } = child;

    if (typeof components[childID] !== 'undefined') {
      const { children, type, id, parentID, ...rest } = components[childID];
      const DropComponent = (Drops[type]) ? (Drops[type]) : type;
      const StaticComponent = (reactstrap[type]) ? (reactstrap[type]) : type;

      const Component = exportHTML ? StaticComponent : DropComponent;
      const props = exportHTML ? rest : ({ ...rest, ['data-id']: id });

      return (
        <Component
          {...props}
          key={ index }
          onDoubleClick={ (e) => handleDoubleClick(e, dispatch, id) }
        >
          { expandChildren(children, components, dispatch, exportHTML) }
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
