const React = require('react');
const { Provider } = require('react-redux');
const { render } = require('react-dom');
const DragApp = require('./DragApp');

const App = (props) => { return (
  <Provider store={ props.store }>
    <DragApp />
  </Provider>
)};

module.exports = App;
