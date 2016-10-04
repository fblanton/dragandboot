const React = require('react');
const { Row } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('Col');

module.exports = ({children, ...rest}) =>
  <Drop>
    <Row {...rest}>
      { children.length ? children : <div className='empty'>DROP COLS HERE</div> }
    </Row>
  </Drop>;
