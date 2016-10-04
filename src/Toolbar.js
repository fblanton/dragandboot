const React = require('react');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');

const dragSpec = {
  beginDrag: (props) => ({ text: props['data-text'] })
}
const Drag = createDraggable('toolbar-item', dragSpec);
const Drop = createDroppable('toolbar-item');

const Toolbar = () =>
  <nav className='navbar navbar-fixed-bottom navbar-light bg-faded'>
    <a className='navbar-brand'>Dragn Boot</a>
    <Drag data-text='hello' style={{ display: 'inline-block' }}>
      <span>Drag Me</span>
    </Drag>
    <Drag data-text='World!' style={{ display: 'inline-block' }}>
      <span>Or Me</span>
    </Drag>
  </nav>;

module.exports = Toolbar;
