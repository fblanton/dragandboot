const React = require('react');
const { connect } = require('react-redux');
const { filterComponents } = require('./util');
const Forms = require('./forms/ColForm');

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
    const type = 'ColForm';

    const Form = Forms[type];

    return (
      <div className='editor'>
        <h1>Editing</h1>
        <Form
          parent={ parent }
          component={ component }
          components={ components }
        />
      </div>
    );
  } else {
    return <div></div>
  }
};

module.exports = connect(mapStateToProps)(Editor);
