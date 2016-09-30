const React = require('react');
const { createDraggable } = require('./drag-and-drop');

const Draggable = createDraggable('toolbar');

const Toolbar = () =>
  <div>
    <Draggable>
      <span>First Item</span>
    </Draggable>
    <Draggable>
      <span>My Toolbar Goes Here</span>
    </Draggable>
  </div>;

module.exports = Toolbar;
