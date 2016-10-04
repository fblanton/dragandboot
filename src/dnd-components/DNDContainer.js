const React = require('react');
const { Container } = require('reactstrap');
const { createDraggable, createDroppable } = require('../dnd-higher-order-components');

const Drop = createDroppable('Row');

module.exports = ({children, ...rest}) =>
  <Drop {...rest}>
    <Container>
      { children.length ? children : <div className='empty'>DROP ROWS HERE</div> }
    </Container>
  </Drop>;
