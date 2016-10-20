const React = require('react');
const RS = require('reactstrap');
const uuid = require('uuid-v4');
const { connect } = require('react-redux');
const { addComponents } = require('./action-creators');
const templates = require('./templates/');

const Scratch = ({ dispatch }) =>
  <RS.FormGroup>
    <RS.Button
      color="info"
      onClick={ (e) => {
        e.preventDefault()
        const tempID = uuid();
        dispatch(addComponents({
          component: {id: tempID, type: 'Page', children: []}})
        );
        dispatch(addComponents(templates.homepage(tempID)))
        dispatch({type: 'SET_ACTIVE', id: tempID});
      }}
    >
      Start from Scratch
    </RS.Button>
  </RS.FormGroup>;

const ConnectedScratch = connect()(Scratch);

module.exports = (props) =>
  <div className='start-screen'>
    <h1>Dragn Boot</h1>
    <p>Create Bootstrap 4 layouts with your mouse.</p>
    <RS.Form>
      <ConnectedScratch />
    </RS.Form>
  </div>;


  // <RS.FormGroup>
  //   <RS.Button color='primary' onClick={ (e) => e.preventDefault() }>Choose a Template</RS.Button>
  // </RS.FormGroup>
