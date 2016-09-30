const React = require('react');
const { createDraggable } = require('./drag-and-drop');

const Draggable = createDraggable('toolbar');

const Toolbar = () =>
  <div>
    <Draggable
      style={{ display: 'inline-block' }}
      
    >
      <span>First Item</span>
    </Draggable>
    <Draggable style={{ display: 'inline-block' }}>
      <span>My Toolbar Goes Here</span>
    </Draggable>
  </div>;

module.exports = Toolbar;
