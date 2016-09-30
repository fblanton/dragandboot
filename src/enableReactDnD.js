const React = require('react');
const { DragSource } = require('react-dnd');

// a drag source contract...
const toolbarSource = { beginDrag: () => ({ text: 'Hello Dragging' }) };

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const StatefulWrapper = Component => React.createClass({
  propTypes: {
    isDragging: React.PropTypes.bool.isRequired,
    connectDragSource: React.PropTypes.func.isRequired
  },

  render: function () {
    let connectDragSource = this.props.connectDragSource;

    return connectDragSource(
      <div>
        <Component { ...this.props }/>
      </div>
    );
  }
});

//module.exports = DragSource('toolbar', toolbarSource, collect)(StatefulWrapper);
module.exports = Component => DragSource('toolbar', toolbarSource, collect)(StatefulWrapper(Component));
