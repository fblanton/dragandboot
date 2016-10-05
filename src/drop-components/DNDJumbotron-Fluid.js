const React = require('react');
const { Jumbotron } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch({...dropped, parent: {id: props['data-id']}});
    //console.log('PROPS[data-id]: ', props['data-id'],'DROPPED: ', dropped, 'COMP: ', component);
  }
};

const Drop = createDroppable(['Container', 'ContainerFluid'], dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Jumbotron {...rest} fluid>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>FLUID - DROP CONTAINERS HERE</div> }
    </Drop>
  </Jumbotron>;
