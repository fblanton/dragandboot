require('./index.html');
require('./index.css');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const store = require('./store');

window.store = store;

if (module.hot) module.hot.accept();

store.subscribe(
  () => ReactDOM.render(<App state={ store.getState() } />, document.getElementById('app'))
);

store.dispatch({type: 'ADD', payload: ', There!' });
