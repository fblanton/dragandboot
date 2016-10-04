const React = require('react');
const { createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('Container');

module.exports = ({children, ...rest}) =>
  <Drop className='page' {...rest}>
    { children.length ? children : <div className='empty'>DROP CONTAINERS HERE</div> }
  </Drop>;
