const React = require('react');
const { connect } = require('react-redux');
const { filterComponents } = require('./util');
const Forms = require('./forms');

const mapStateToProps = ({ editComponent, components }) => {
  if (editComponent !== '') {
    return ({
      editComponent,
      components: filterComponents(components, editComponent)
    });
  } else {
    return {editComponent: false};
  }
}

const Editor = ({ editComponent, components, dispatch }) => {
  if (editComponent) {
    const component = components[editComponent];
    const parent = components[component.parentID]
    const type = component.type + 'Form';

    const Form = Forms[type];

    return (typeof Form !== 'undefined')
      ? <div className='editor'>
        <Form
          parent={ parent }
          component={ component }
          components={ components }
        />
      </div>
      : <div className='editor'>
        <h1>Not Edtable</h1>
        <p>This element has not been made editable yet.</p>
        <button onClick= { () => dispatch({type: 'EDIT_COMPONENT', id: ''}) }>
          Dismiss
        </button>
      </div>;
  } else {
    return <div></div>
  }
};

module.exports = connect(mapStateToProps)(Editor);
