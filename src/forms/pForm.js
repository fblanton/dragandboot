const React = require('react');
const { Field, reduxForm } = require('redux-form');
const { connect } = require('react-redux');
const _ = require('underscore');
const { Form, FormGroup, Label, Input, Button, ButtonGroup, ButtonToolbar } = require('reactstrap');
const liveUpdate = (value, id, dispatch) => {
  dispatch({type: 'UPDATE_COMPONENT', id, update: {children: [value]}});
  return value;
}

const PInput = props =>
  <div>
    <Input type='textarea' {...props.input} style={{width: '100%', height: '7rem'}} />
  </div>;

const PForm = ({ reset, onChangeAction, handleSubmit, dispatch, component: { id } }) =>
<Form onSubmit={ handleSubmit }>
  <h1>Paragraph</h1>
  <hr />
  <FormGroup>
    <Field
      name='paragraph'
      component={ PInput }
      normalize={ value => liveUpdate(value, id, dispatch) }
      id={ id }
    />
  </FormGroup>
  <ButtonToolbar>
    <ButtonGroup>
      <Button color="primary" type='submit' onClick= { handleSubmit(updated => formSubmit(updated, id, dispatch)) }>Apply</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button color="warning" type='button' onClick= { reset }>Reset</Button>
    </ButtonGroup>
  </ButtonToolbar>
</Form>

const formSubmit = ({ paragraph }, id, dispatch) => {
  dispatch({type: 'UPDATE_COMPONENT', id, update: {children: [paragraph]}});
  dispatch({type: 'EDIT_COMPONENT', id: ''});
}

module.exports = connect(
  ({ editComponent: id, components: c }) => ({ initialValues: { paragraph: c[id].children[0] } })
)(reduxForm({form: 'ParagraphForm'})(PForm));
