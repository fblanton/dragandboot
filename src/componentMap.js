const React = require('react');
const R = require('reactstrap');
const DND = require('./dnd-components/index');

module.exports = item => {
  const components = {
    Container: DND.Container,
    Row: DND.Row,
    Col: DND.Col
  };

  const theComponent = components[item];
  return (theComponent) ? theComponent : item;
}
