const React = require('react');
const { connect } = require('react-redux');
const { filterComponents } = require('./util');
const { ColForm, handleSubmit } = require('./forms/ColForm');

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

    return (
      <div className='editor'>
        <h1>Editing</h1>
        <ColForm
          parent={ parent }
          component={ component }
          components={ components }
          onSubmit={ payload => handleSubmit(payload, component, dispatch) }
        />
      </div>
    );
  } else {
    return <div></div>
  }
};

module.exports = connect(mapStateToProps)(Editor);
