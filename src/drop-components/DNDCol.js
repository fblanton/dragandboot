const React = require('react');
const { Col } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch({...dropped, parent: {id: props['data-id']}});

    //console.log('PROPS: ', props,'DROPPED: ', dropped, 'COMP: ', component);
  }
};

const Drop = createDroppable(['h1', 'Row'], dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Col {...rest}>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>DROP ITEMS HERE</div> }
    </Drop>
  </Col>;
