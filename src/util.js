const React = require('react');
const componentMap = require('./componentMap');
const Connected = require('./connected');

const expandChildren = (children, components) => children.map(
  (child, index) => {
    if (typeof child === 'string') return child;

    const { id: childID } = child;

    if (typeof components[childID] !== 'undefined') {
      const { children, type, id: id, ...rest } = components[childID];
      const Component = componentMap(components[id].type);

      return (
        <Component {...rest} key={ index } data-id={ id }>
          { expandChildren(children, components) }
        </Component>
      );
    } else {
      console.log('Having issues, child: ', id, 'c[child]: ', components[id], 'typeof child: ', typeof child);
      return;
    }
  }
);

module.exports = {
  expandChildren
}
