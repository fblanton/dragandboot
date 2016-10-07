const React = require('react');
const { createDroppable } = require('../dnd-higher-order-components');

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch({...dropped, parent: {id: props['data-id']}});
    //console.log('PROPS: ', props,'DROPPED: ', dropped, 'COMP: ', component);
  }
};

const Drop = createDroppable(['Container', 'Jumbotron'], dropSpec);

module.exports = ({children, ...rest}) =>
  <Drop className='page' {...rest}>
    { children.length ? children : <div className='empty'>DROP CONTAINERS or JUMBOTRONS HERE</div> }
  </Drop>;
