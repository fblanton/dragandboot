const React = require('react');
const { DropTarget } = require('react-dnd');
const { connect } = require('react-redux');

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
    const { connectDropTarget, isOver, children } = this.props;

    return connectDropTarget(
      <div
        className= { (isOver ? 'clearfix hoverable hovered' : 'clearfix hoverable') }
      >
        { children }
      </div>
    );
  }
});

module.exports = (types = ['drag-and-drop'], spec = defaultDropSpec, collect = defaultDropCollect) => connect()(DropTarget(types, spec, collect)(Droppable));
