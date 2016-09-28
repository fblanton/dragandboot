const React = require('react');

module.exports = ({state}) => {
    return (
      <h3>{ state.reduce((current, next) => current + next) }</h3>
    );
  }
