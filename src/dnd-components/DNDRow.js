const React = require('react');
const { Row } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const dropSpec = {
  drop: (props, monitor, component) => {
    const dropped = monitor.getItem();
    props.dispatch({...dropped, parent: {id: props['data-id']}});
    console.log('PROPS: ', props,'DROPPED: ', dropped, 'COMP: ', component);
  }
};

const Drop = createDroppable('Col', dropSpec);

module.exports = ({children, ['data-id']: id, ...rest}) =>
  <Row {...rest}>
    <Drop data-id={ id }>
      { children.length ? children : <div className='empty'>DROP COLS HERE</div> }
    </Drop>
  </Row>;
