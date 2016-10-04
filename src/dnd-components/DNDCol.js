const React = require('react');
const { Col } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('h1');

module.exports = ({children, ...rest}) =>
  <Drop>
    <Col {...rest}>
      { children.length ? children : <div className='empty'>DROP ITEMS HERE</div> }
    </Col>
  </Drop>;
