const React = require('react');
const R = require('reactstrap');
const DND = require('./drop-components');

module.exports = item => {
  const components = {
    Container: DND.Container,
    Row: DND.Row,
    Col: DND.Col,
    Jumbotron: DND.Jumbotron,
    JumbotronFluid: DND.JumbotronFluid,
    Page: DND.Page
  };

  const theComponent = components[item];
  return (theComponent) ? theComponent : item;
}
