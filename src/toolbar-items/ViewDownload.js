const React = require('react');
const { connect } = require('react-redux');
const { Nav, ButtonGroup, Button } = require('reactstrap');

const mapStateToProps = ({ activePage, exportHTML }) =>
  ({ activePage, exportHTML });

const ViewDownload = ({ activePage, exportHTML, dispatch }) =>
  (activePage !== '') ?
  <Nav className='pull-xs-right' navbar>
    <ButtonGroup>
      <Button color='primary' onClick={ () => dispatch({type: 'TOGGLE_EXPORT'})}>
        { exportHTML ? 'Hide HTML' : 'Generate HTML' }
      </Button>
    </ButtonGroup>
  </Nav> :
  <div></div>

module.exports = connect(mapStateToProps)(ViewDownload);
