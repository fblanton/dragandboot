const React = require('react');
const { Provider } = require('react-redux');
const DragApp = require('./DragApp');
const Editor = require('./Editor');
const Toolbar = require('./Toolbar');
const ViewHTML = require('./ViewHTML');
const HTML5Backend = require('react-dnd-html5-backend');
const { DragDropContext } = require('react-dnd');

const App = React.createClass({
  render: function () {
    return (
      <Provider store={ this.props.store }>
        <div>
          <Toolbar />
          <div className='main-app'>
            <DragApp />
          </div>
          <Editor />
          <ViewHTML />
        </div>
      </Provider>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(App);
