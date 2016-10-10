const React = require('react');
const { Provider } = require('react-redux');
const DragApp = require('./DragApp');
const Editor = require('./Editor');
const Toolbar = require('./Toolbar');
const ExportHTML = require('./ExportHTML');
const HTML5Backend = require('react-dnd-html5-backend');
const { DragDropContext } = require('react-dnd');

const App = React.createClass({
  render: function () {
    const { activePage } = this.props.store.getState();

    return (
      <Provider store={ this.props.store }>
        <div>
          <Toolbar />
          <div className='main-app'>
            <DragApp />
          </div>
          <Editor />
          { (activePage !== '') ? <ExportHTML store={ this.props.store } /> : null }
        </div>
      </Provider>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(App);
// const uuid = require('uuid-v4');
// const tempID = uuid();
// store.dispatch({type: 'ADD_COMPONENT', component: {id: tempID, type: 'Page', children: []}});
// store.dispatch({type: 'SET_ACTIVE', id: tempID});
