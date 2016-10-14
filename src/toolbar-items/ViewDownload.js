const React = require('react');
const { connect } = require('react-redux');
const { Nav, NavItem, ButtonGroup, Button } = require('reactstrap');

const DownloadLink = ({ downloadLink }) => {
  return (downloadLink !== '') ? <a className="btn btn-success" href={ downloadLink } role="button">Download</a> : null
};

const ConnectedDownloadLink = connect(({ downloadLink }) => ({ downloadLink }))(DownloadLink);

const mapStateToProps = ({ activePage, exportHTML }) =>
  ({ activePage, exportHTML });

const ViewDownload = ({ activePage, exportHTML, dispatch }) =>
  (activePage !== '') ?
  <Nav className='pull-xs-right' navbar>
    <ButtonGroup>
      { exportHTML ? <ConnectedDownloadLink /> : null }
      <Button color='primary' onClick={ () => dispatch({type: 'TOGGLE_EXPORT'})}>
        { exportHTML ? 'Hide HTML' : 'Generate HTML' }
      </Button>
    </ButtonGroup>
  </Nav> :
  <div></div>

module.exports = connect(mapStateToProps)(ViewDownload);
