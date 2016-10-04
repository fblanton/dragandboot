const React = require('react');
const { createDroppable } = require('../dnd-higher-order-components');

const dropSpec = {
  drop: (props, monitor, component) => {
    const dropped = monitor.getItem();
    props.dispatch({...dropped, parent: {id: props['data-id']}});
    console.log('PROPS: ', props,'DROPPED: ', dropped, 'COMP: ', component);
  }
};

const Drop = createDroppable('Container', dropSpec);

module.exports = ({children, ...rest}) =>
  <Drop className='page' {...rest}>
    { children.length ? children : <div className='empty'>DROP CONTAINERS HERE</div> }
  </Drop>;
