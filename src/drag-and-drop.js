const React = require('react');
const { DragSource, DropTarget } = require('react-dnd');

// create a draggable react compnent
const defaultDragSpec = {
  beginDrag: () => ({ text: 'Hello Dragging' }),
  endDrag: (props, monitor) => {
    if (monitor.didDrop()) console.log(props, monitor.getDropResult());
  }
};

const defaultDragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const Draggable = React.createClass({
  render: function() {
    const { connectDragSource, isDragging, children, style } = this.props;

    return connectDragSource(
      <div
        data-dragging={ isDragging }
        className={ isDragging ? 'draggable dragging' : 'draggable' }
        style={{ ...style, opacity: (isDragging ? 0.5 : 1) }}
      >
        { [...React.Children.toArray(children)] }
      </div>
    );
  }
});

// create a react component that can receive draggable items
const defaultDropSpec = {
  drop: (props, monitor, component) => {
    return {dropProps: props};
  }
};

const defaultDropCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const Droppable = React.createClass({
  render: function() {
    const { connectDropTarget, isOver, children, style } = this.props;

    return connectDropTarget(
      <div
        data-hover={ isOver }
        className= { isOver ? 'hoverable hovered' : 'hoverable'}
        style={{ ...style }}
      >
        { [...React.Children.toArray(children)] }
      </div>
    );
  }
});

module.exports = {
  createDraggable: (type = 'drag-and-drop', spec = defaultDragSpec, collect = defaultDragCollect) => DragSource(type, spec, collect)(Draggable),
  createDroppable: (types = 'drag-and-drop', spec = defaultDropSpec, collect = defaultDropCollect) => DropTarget(types, spec, collect)(Droppable)
};
