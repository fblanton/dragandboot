const React = require('react');
const { DropTarget } = require('react-dnd');

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
    const { connectDropTarget, isOver, children, style, className } = this.props;

    return connectDropTarget(
      <div
        data-hover={ isOver }
        className= { (isOver ? 'hoverable hovered' : 'hoverable') + ( (className) ? (' ' + className) : '') }
        style={{ ...style }}
      >
        { children }
      </div>
    );
  }
});

module.exports = (types = ['drag-and-drop'], spec = defaultDropSpec, collect = defaultDropCollect) => DropTarget(types, spec, collect)(Droppable);
