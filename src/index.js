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

const tempID = uuid();
store.dispatch({type: 'ADD_COMPONENT', component: {id: tempID, type: 'Page', children: []}});
store.dispatch({type: 'SET_ACTIVE', id: tempID});

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
  });
}
