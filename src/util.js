const React = require('react');
const componentMap = require('./componentMap');

const expandChildren = (children, components) => children.map(
  (child, index) => {
    if (typeof child === 'string') return child;

    const { id } = child;

    if (typeof components[id] !== 'undefined') {
      const Component = componentMap(components[id].type);
      const { children } = components[id];

      return (
        <Component key={ index }>
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
