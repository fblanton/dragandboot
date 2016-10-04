const React = require('react');
const { Row } = require('reactstrap');
const { createDraggable, createDroppable } = require('../drag-and-drop');

const Drop = createDroppable('col');
const DNDRow = ({children, ...rest}) =>
  <Drop>
    <Row {...rest}>
      { children }
    </Row>
  </Drop>;

module.exports = DNDRow;
