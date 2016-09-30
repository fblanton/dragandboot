const React = require('react');
const { connect } = require('react-redux');
const { createDraggable } = require('./drag-and-drop');
const add = require('./actions');

const mapStateToProps = state => ({ hellos: state });
const mapDispatchToProps = { add };

const Draggable = createDraggable('list-item');

const Hello = ({ hellos, add }) => {
  return (
    <div>
    { hellos.map((hello, i) =>
      <Draggable key={ i }>
        <h1 onClick={ () => add('Hello') }>{ hello }</h1>
      </Draggable>)
    }
    </div>
  )
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello);
