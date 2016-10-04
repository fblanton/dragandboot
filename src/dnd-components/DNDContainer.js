const React = require('react');
const { Container } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('Row');

module.exports = ({children, ...rest}) =>
  <Drop>
    <Container {...rest}>
      { children }
    </Container>
  </Drop>;
