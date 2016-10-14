const React = require('react');
const { Provider, connect } = require('react-redux');
const { renderToStaticMarkup } = require('react-dom/server');
const { expandChildren } = require('./util');
const { html: beautifyHTML } = require('js-beautify');
const topOfPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css" integrity="2hfp1SzUoho7/TsGGGDaFdsuuDL0LX2hnUp6VkX3CUQ2K4K+xjboZdsXyp4oUHZj" crossorigin="anonymous">
  <title>Drag and Boot Export</title>
</head>
<body>`

const bottomOfPage = `
</body>
</html>`


const mapStateToProps = ({ activePage, components, exportHTML }) =>
  ({ activePage, components, exportHTML });

const createHTML = ({ store, activePage, components, dispatch }) => {
  const children = components[activePage].children;
  const staticMarkup = renderToStaticMarkup(
    <Provider store={ store }>
    <div>
    { expandChildren(children, components, dispatch, true) }
    </div>
    </Provider>
  )

  const theHTML = beautifyHTML(
    topOfPage
    + staticMarkup.substring(5, staticMarkup.length-6)
    + bottomOfPage,
    {['indent_size']: 2}
  );

  dispatch((dispatch, getState, postHTML) => {
    postHTML('index', theHTML)
      .then(r => r.json()).then(r => console.log(r))
      .catch(err => console.log('error: ', err))
  })
  return theHTML;
}

const ViewHTML = props =>
  (props.exportHTML)
    ? <div className='editor' style={{ width: '90%' }}>
        <pre>{ createHTML(props) }</pre>
      </div>
    : <div></div>

module.exports = {
  ViewHTML: connect(mapStateToProps)(ViewHTML),
  createHTML
};
