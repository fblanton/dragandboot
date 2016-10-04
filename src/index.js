require('./index.html');
require('./index.css');
const uuid = require('uuid-v4');

const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');
const store = require('./store');
const App = require('./App');

const render = TheApp => ReactDOM.render(
  <AppContainer>
    <TheApp store={ store }/>
  </AppContainer>
  , document.getElementById('app')
);

store.dispatch({type: 'ADD_COMPONENT', component: {id: 0, type: 'Page', children: []}});
store.dispatch({type: 'SET_ACTIVE', id: 0});
store.dispatch({type: 'ADD_COMPONENT', parent: { id: 0 }, component: {id: 1, type: 'Container', children: []}});
store.dispatch({type: 'ADD_COMPONENT', parent: { id: 1 }, component: {id: 2, type: 'Row', children: []}});
store.dispatch({type: 'ADD_COMPONENT', parent: { id: 2 }, component: {id: 3, type: 'Col', children: []}});
store.dispatch({type: 'ADD_COMPONENT', parent: { id: 3 }, component: {id: uuid(), type: 'b', children: ['This is  2nd a test.']}});

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
  });
}
