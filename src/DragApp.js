const React = require('react');
const { connect } = require('react-redux');
const { renderPage } = require('./util');

const mapStateToProps = state => ({
  activePage: state.activePage,
  components: state.components
});

const Page = ({ activePage, components }) => renderPage(activePage, components);

module.exports = connect(mapStateToProps)(Page);
