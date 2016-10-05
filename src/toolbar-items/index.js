const uuid = require('uuid-v4');
const { createDraggable } = require('../dnd-higher-order-components');

const type = 'Container';

const createSpec = (type, contents) => ({
  beginDrag: ({children, ...rest}) => ({type: 'ADD_COMPONENT', component: {id: uuid(), type: type, children: [...contents], ...rest}})
});

const createTool = (type, contents = []) => createDraggable(type, createSpec(type, contents));

module.exports = {
  Col: createTool('Col'),
  Container: createTool('Container'),
  Row: createTool('Row'),
  H1: createTool('h1', ['Lorem Ipsum'])
};
