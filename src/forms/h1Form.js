const React = require('react');
const { Field, reduxForm } = require('redux-form');
const { connect } = require('react-redux');
const _ = require('underscore');
const { Button } = require('reactstrap');

const liveUpdate = (value, id, dispatch) => {
  dispatch({type: 'UPDATE_COMPONENT', id, update: {children: [value]}});
  return value;
}
const HeaderForm = ({ reset, onChangeAction, handleSubmit, dispatch, component: { id } }) =>
<form onSubmit={ handleSubmit }>
  <h1>Header</h1>
  <hr />
  <div>
    <Field
      name='header'
      component='input'
      type='text'
      normalize={ value => liveUpdate(value, id, dispatch) }
      id={ id }
    />
  </div>
  <Button color="primary" type='submit' onClick= { handleSubmit((newHeader) => formSubmit(newHeader, id, dispatch)) }>Apply</Button>
  <Button color="warning" type='button' onClick= { reset }>Reset</Button>
</form>

const formSubmit = ({ header }, id, dispatch) => {
  dispatch({type: 'UPDATE_COMPONENT', id, update: {children: [header]}});
  dispatch({type: 'EDIT_COMPONENT', id: ''});
}

module.exports = connect(
  ({ editComponent: id, components: c }) => ({ initialValues: { header: c[id].children[0] } })
)(reduxForm({form: 'HeaderForm'})(HeaderForm));
