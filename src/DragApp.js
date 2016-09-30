const React = require('react');
const { connect } = require('react-redux');
const { createDraggable, createDroppable } = require('./drag-and-drop');
const add = require('./actions');

const mapStateToProps = state => ({ hellos: state.hellos });
const mapDispatchToProps = { add };

const Drag = createDraggable();
const dropSpec = {
  drop: (props, monitor, compnent) => {
    const dropped = monitor.getItem();
    props.dispatch(dropped.text);
    console.log(props, dropped);
  }
};

const Drop = createDroppable('toolbar-item', dropSpec);

const Hello = ({ hellos, add }) =>
  <div>
    <Drop dispatch={ add }>
      <h1>DROP HERE</h1>
    </Drop>
    { hellos.map((hello, i) =>
      <Drag key={ i }><h1>{ hello }</h1></Drag>)
    }
  </div>;

module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello);
