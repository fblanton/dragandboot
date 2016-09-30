const React = require('react');
const { createDraggable, createDroppable } = require('./drag-and-drop');

const Drag = createDraggable('toolbar-item');
const Drop = createDroppable('toolbar-item');

const Toolbar = () =>
  <nav className='navbar navbar-fixed-bottom navbar-light bg-faded'>
    <a className='navbar-brand'>Dragn Boot</a>
    <Drag data-name='drag1' style={{ display: 'inline-block' }}>
      <span>First Item</span>
    </Drag>
  </nav>;

module.exports = Toolbar;
