const React = require('react');
const { connect } = require('react-redux');
const { expandChildren } = require('./util');
const { Page } = require('./drop-components');

const mapStateToProps = state => ({
  activePage: state.activePage,
  components: state.components
});

const DragApp = ({ activePage, components }) => {
  const children = components[activePage].children;

  return (
    <Page data-id={ activePage }>
      { expandChildren(children, components) }
    </Page>
  );
};

module.exports = connect(mapStateToProps)(DragApp);
