const React = require('react');
const { createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('Container');

module.exports = ({children, ...rest}) =>
  <Drop {...rest}>
    { children }
  </Drop>;
