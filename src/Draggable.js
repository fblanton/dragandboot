const React = require('react');
const { DragSource } = require('react-dnd');

// const draggableSource = { beginDrag: () => ({ text: 'Hello Dragging' }) };
//
// const collect = (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// });
const UList = props => {
  return (
    <div>
      { [...props.children] }
    </div>
  );
}

module.exports = UList;
