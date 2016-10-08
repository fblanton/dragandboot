const React = require('react');
const { Provider, connect } = require('react-redux');
const { renderToStaticMarkup } = require('react-dom/server');
const { expandChildren } = require('./util');
const { html: beautify_html } = require('js-beautify');
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


const mapStateToProps =
  ({ activePage, components, exportHTML }) =>
    ({ activePage, components, exportHTML });

const ExportHTML =
({ store, activePage, components, dispatch, exportHTML }) => {
  if (exportHTML) {
    const children = components[activePage].children;
    const staticMarkup = renderToStaticMarkup(
      <Provider store={ store }>
      <div>
      { expandChildren(children, components, dispatch, exportHTML) }
      </div>
      </Provider>
    )

    const theHTML = beautify_html(
      topOfPage
      + staticMarkup.substring(5, staticMarkup.length-6)
      + bottomOfPage,
      {['indent_size']: 2}
    );
    return (
      <div className='editor' style={ {width: '90%'} }>
        <pre>{ theHTML }</pre>
      </div>
    );
  } else {
    return <div></div>
  }
}

module.exports = connect(mapStateToProps)(ExportHTML);
