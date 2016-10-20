const React = require('react');
const { Container } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');
const { addComponents } = require('../action-creators')

const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch(addComponents(dropped, props['data-id']));
  }
};

const Drop = createDroppable(['Row', 'Jumbotron'], dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Container {...rest}>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>DROP ROWS HERE</div> }
    </Drop>
  </Container>;
