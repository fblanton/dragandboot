const React = require('react');
const { Provider } = require('react-redux');
const { render } = require('react-dom');
const DragApp = require('./DragApp');

const App = (props) => { return (
  <Provider store={ props.store }>
    <div>
    <h2>Hello World</h2>
    <DragApp />
    </div>
  </Provider>
)};

module.exports = App;
