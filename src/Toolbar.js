const React = require('react');
const { createDraggable, createDroppable } = require('./drag-and-drop');

const Draggable = createDraggable('toolbar-item');
const Droppable = createDroppable('toolbar-item');
const DragAndDrop = ({ children }) =>
(  <Draggable>
    <Droppable>
      { [...React.Children.toArray(children)] }
    </Droppable>
  </Draggable>
);

const Toolbar = () =>
  <div>
    <Draggable data-name='drag1' style={{ display: 'inline-block' }}>
      <span>First Item</span>
    </Draggable>
    <Draggable style={{ display: 'inline-block' }}>
      <span>My Toolbar Goes Here</span>
    </Draggable>
    <Droppable className='drop'>
      <div>Drop Here</div>
    </Droppable>
    <DragAndDrop className='drop2'>
      <div>Drop Here</div>
    </DragAndDrop>
  </div>;

module.exports = Toolbar;
