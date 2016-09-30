const React = require('react');
const { DragSource } = require('react-dnd');

const defaultDragSource = { beginDrag: () => ({ text: 'Hello Dragging' }) };

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const Draggable = React.createClass({
  render: function () {
    const { connectDragSource, isDragging, children, style } = this.props;

    return connectDragSource((
      <div
        data-dragging={ isDragging }
        className={ isDragging ? 'draggable dragging' : 'draggable not-dragging' }
        style={{ ...style, opacity: (isDragging ? 0.5 : 1) }}
      >
        { [...React.Children.toArray(children)] }
      </div>
    ));
  }
});

module.exports = {
  createDraggable: (type = 'draggable', source = defaultDragSource) => DragSource(type, source, collect)(Draggable)
};
