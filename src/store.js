const { createStore, applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk').default;
const appReducer = require('./reducers');
const postHTML = require('./file-creator-api');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(postHTML))));

window.testStore = store;

if (module.hot) {
  module.hot.accept('./reducers', () => {
    console.log('modified reducers');
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

module.exports = store;
