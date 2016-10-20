const uuid = require('uuid-v4');
const { createDraggable } = require('../dnd-higher-order-components');

const type = 'Container';

const createSpec = (type, contents) => ({
  beginDrag: ({children, ...rest}) => ({component: {id: uuid(), type: type, children: [...contents], ...rest}})
});

const createTool = (type, contents = []) => createDraggable(type, createSpec(type, contents));

module.exports = {
  Col: createTool('Col'),
  Container: createTool('Container'),
  Row: createTool('Row'),
  H1: createTool('h1', ['Lorem Ipsum']),
  H3: createTool('h3', ['Dolor Sit']),
  P: createTool('p', ['Consectetur adipiscing elit. Nulla vitae dolor at sem dignissim maximus. In semper enim nec quam maximus, nec venenatis justo dignissim. Adipiscing elit nulla vitae.']),
  Jumbotron: createTool('Jumbotron'),
  JumbotronFluid: createTool('JumbotronFluid')
};
