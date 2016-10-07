const React = require('react');
const { Field, reduxForm } = require('redux-form');
const { connect } = require('react-redux');
const _ = require('underscore');

const JumbotronForm = ({ dispatch, component: { id } }) =>
<div>
  <h1>Jumbotron</h1>
  <button onClick= { () => dispatch({type: 'UPDATE_COMPONENT', id, update: { fluid: false }}) }>
    Make Responsive
  </button>
  <button onClick= { () => dispatch({type: 'UPDATE_COMPONENT', id, update: { fluid: true }}) }>
    Make Fluid
  </button>
  <button onClick= { () => dispatch({type: 'EDIT_COMPONENT', id: ''}) }>
    Dismiss
  </button>
</div>

module.exports = connect()(JumbotronForm);
