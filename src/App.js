const React = require('react');
const { Provider } = require('react-redux');
const { render } = require('react-dom');
const DragApp = require('./DragApp');
const Toolbar = require('./Toolbar');
const HTML5Backend = require('react-dnd-html5-backend');
const { DragDropContext } = require('react-dnd');

const StatefulWrapper = React.createClass({
  render: function () {
    return (
      <div>
        <App store={ this.props.store }/>
      </div>
    );
  }
});

const App = (props) => { return (
  <Provider store={ props.store }>
    <div>
      <Toolbar />
      <DragApp />
    </div>
  </Provider>
)};

module.exports = DragDropContext(HTML5Backend)(StatefulWrapper);
