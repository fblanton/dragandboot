const React = require('react');
const { Jumbotron } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');
const { addComponents } = require('../action-creators')
const dropSpec = {
  drop: (props, monitor, component) => {
    if (monitor.didDrop()) return;

    const dropped = monitor.getItem();
    props.dispatch(addComponents(dropped, props['data-id']));
  }
};

const Drop = createDroppable(['h1', 'p', 'Container'], dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Jumbotron {...rest}>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>DROP HEADERS AND PARAGRAPHS HERE</div> }
    </Drop>
  </Jumbotron>;
