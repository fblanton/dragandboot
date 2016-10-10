const React = require('react');
const StartScreen = require('./StartScreen');
const { connect } = require('react-redux');
const { expandChildren } = require('./util');
const { Page } = require('./drop-components');

const mapStateToProps = state => ({
  activePage: state.activePage,
  components: state.components,
  exportHTML: state.exportHTML
});

const DragApp = ({ activePage, components, dispatch, exportHTML }) => {
  if (activePage !== '') {
    const children = components[activePage].children;

    return (
      <Page data-id={ activePage }>
        { expandChildren(children, components, dispatch, exportHTML) }
      </Page>
    )
  } else {
    return <StartScreen />
  }
};

module.exports = connect(mapStateToProps)(DragApp);
