const React = require('react');
const { Field, reduxForm } = require('redux-form');
const { connect } = require('react-redux');
const _ = require('underscore');

const mapStateToProps = ({ editComponent, components }) => {
  const { children, id, parentID, type, ...rest } = components[editComponent];

  return ({initialValues: {...flatten(rest)}})
};

const ColForm = ({ handleSubmit, component, dispatch }) =>
  <form className='col-form' onSubmit={ handleSubmit(formValues => colSubmit(formValues, component, dispatch)) }>
    <div>
      <label htmlFor='xs'>xs</label>
      <Field name='xs-size' component='input' type='text'/>
      <Field name='xs-push' component='input' type='text'/>
      <Field name='xs-pull' component='input' type='text'/>
      <Field name='xs-offset' component='input' type='text'/>
    </div>
    <div>
      <label htmlFor='sm'>sm</label>
      <Field name='sm-size' component='input' type='text'/>
      <Field name='sm-push' component='input' type='text'/>
      <Field name='sm-pull' component='input' type='text'/>
      <Field name='sm-offset' component='input' type='text'/>
    </div>
    <div>
      <label htmlFor='md'>md</label>
      <Field name='md-size' component='input' type='text'/>
      <Field name='md-push' component='input' type='text'/>
      <Field name='md-pull' component='input' type='text'/>
      <Field name='md-offset' component='input' type='text'/>
    </div>
    <div>
      <label htmlFor='lg'>lg</label>
      <Field name='lg-size' component='input' type='text'/>
      <Field name='lg-push' component='input' type='text'/>
      <Field name='lg-pull' component='input' type='text'/>
      <Field name='lg-offset' component='input' type='text'/>
    </div>
    <div>
      <label htmlFor='xl'>xl</label>
      <Field name='xl-size' component='input' type='text'/>
      <Field name='xl-push' component='input' type='text'/>
      <Field name='xl-pull' component='input' type='text'/>
      <Field name='xl-offset' component='input' type='text'/>
    </div>
    <button type='submit'>Submit</button>
  </form>;

const ColFormImplemented = ({ handleSubmit, component, dispatch }) =>
  <form className='col-form' onSubmit={ handleSubmit(formValues => colSubmit(formValues, component, dispatch)) }>
    <div>SIZE PUSH PULL OFFSET</div>
    <div>
      <label htmlFor='xs'>xs</label>
      <Field name='xs-size' component='input' type='text'/>
      <Field name='xs-push' component='input' type='text'/>
      <Field name='xs-pull' component='input' type='text'/>
      <Field name='xs-offset' component='input' type='text'/>
    </div>
    <div>
      <label htmlFor='md'>md</label>
      <Field name='md-size' component='input' type='text'/>
      <Field name='md-push' component='input' type='text'/>
      <Field name='md-pull' component='input' type='text'/>
      <Field name='md-offset' component='input' type='text'/>
    </div>
    <button type='submit'>Submit</button>
  </form>;

const flatten = obj => {
  const flattest = _.reduce(obj,
    (memo, val, key) => {
      const flatter = _.reduce(val,
        (memoF, valF, keyF) =>
          ({...memoF, [key + '-' + keyF]: valF})
        , {}
      )
      return {...memo, ...flatter}
    }, {}
  )
  return flattest;
}

const colSubmit = (payload, component, dispatch) => {
  let xs = {
    size: payload['xs-size'],
    push: payload['xs-push'],
    pull: payload['xs-pull'],
    offset: payload['xs-offset']
  };

  xs = _.reduce(xs, (memo, val, key) =>
    (typeof val !== 'undefined') ? { ...memo, [key]: val } : memo
    , {});

  let md = {
    size: payload['md-size'],
    push: payload['md-push'],
    pull: payload['md-pull'],
    offset: payload['md-offset']
  };

  md = _.reduce(md, (memo, val, key) =>
    (typeof val !== 'undefined') ? { ...memo, [key]: val } : memo
    , {});

  dispatch({
    type: 'UPDATE_COMPONENT',
    id: component.id,
    update: { xs, md }
  });

  dispatch({type: "EDIT_COMPONENT", id: ""});
};

module.exports = connect(mapStateToProps)(reduxForm({form: 'colForm'})(ColFormImplemented))
