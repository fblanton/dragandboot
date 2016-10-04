const React = require('react');
const { DragSource } = require('react-dnd');

// create a draggable react compnent
const defaultDragSpec = {
  beginDrag: () => ({ text: 'Hello Dragging' }),
  endDrag: (props, monitor) => { console.log() }
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
        { children }
      </div>
    );
  }
});

module.exports = (type = 'drag-and-drop', spec = defaultDragSpec, collect = defaultDragCollect) => DragSource(type, spec, collect)(Draggable);
