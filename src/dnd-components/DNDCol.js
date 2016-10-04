const React = require('react');
const { Col } = require('reactstrap');
const { createDraggable, createDroppable } = require('../drag-and-drop');

const Drop = createDroppable('h1');

module.exports = ({children, ...rest}) =>
  <Drop>
    <Col {...rest}>
      { children }
    </Col>
  </Drop>;