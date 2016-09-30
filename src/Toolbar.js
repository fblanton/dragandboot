const React = require('react');
const { createDraggable, createDroppable } = require('./drag-and-drop');

const dragSpec = {
  beginDrag: () => ({ text: 'from toolbar'})
}
const Drag = createDraggable('toolbar-item', dragSpec);
const Drop = createDroppable('toolbar-item');

const Toolbar = () =>
  <nav className='navbar navbar-fixed-bottom navbar-light bg-faded'>
    <a className='navbar-brand'>Dragn Boot</a>
    <Drag data-type='hello' style={{ display: 'inline-block' }}>
      <span>Drag Me</span>
    </Drag>
  </nav>;

module.exports = Toolbar;
