const appReducer = (state = ['Hello'], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.text];
    case 'ADD_TO':
      return [...state, action.text];
    default:
      return state;
  }
};

module.exports = appReducer;
