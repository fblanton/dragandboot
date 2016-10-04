const React = require('react');
const { Container } = require('reactstrap');
const { createDraggable, createDroppable } = require('../drag-and-drop');

const Drop = createDroppable('row');

module.exports = ({children, ...rest}) =>
  <Drop>
    <Container {...rest}>
      { children }
    </Container>
  </Drop>;
