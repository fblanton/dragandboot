const React = require('react');
const { createDroppable } = require('../dnd-higher-order-components');
const { addComponents } = require('../action-creators')

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch(addComponents(dropped, props['data-id']));
  }
};

const Drop = createDroppable(['Container', 'Jumbotron'], dropSpec);

module.exports = ({children, ...rest}) =>
  <Drop className='page' {...rest}>
    { children.length ? children : <div className='empty'>DROP CONTAINERS or JUMBOTRONS HERE</div> }
  </Drop>;
