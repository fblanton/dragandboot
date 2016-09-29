const { createStore } = require('redux');
const appReducer = require('./reducers');

const store = createStore(appReducer, window.devToolsExtension && window.devToolsExtension());

if (module.hot) {
  module.hot.accept('./reducers', () => {
    console.log('modified reducers');
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

module.exports = store;
