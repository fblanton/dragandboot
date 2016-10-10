require('./index.html');
require('./index.css');

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

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App'));
  });
}
