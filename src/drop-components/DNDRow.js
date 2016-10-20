const React = require('react');
const { Row } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');
const { addComponents } = require('../action-creators')

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch(addComponents(dropped, props['data-id']));
  }
};

const Drop = createDroppable('Col', dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Row {...rest}>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>DROP COLS HERE</div> }
    </Drop>
  </Row>;
