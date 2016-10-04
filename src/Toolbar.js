const React = require('react');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem } = require('reactstrap');

const uuid = require('uuid-v4');

const dragContainerSpec = {
  beginDrag: () => ({type: 'ADD_COMPONENT', component: {id: uuid(), type: 'Container', children: []}})
}
const DragContainer = createDraggable('Container', dragContainerSpec);

const dragRowSpec = {
  beginDrag: () => ({type: 'ADD_COMPONENT', component: {id: uuid(), type: 'Row', children: []}})
}
const DragRow = createDraggable('Row', dragRowSpec);

const dragColSpec = {
  beginDrag: ({style, children, ...rest}) => {
    console.log(rest);
    return ({type: 'ADD_COMPONENT', component: {id: uuid(), type: 'Col', children: [], ...rest}});
  }
}
const DragCol = createDraggable('Col', dragColSpec);

const Toolbar = () =>
  <Navbar light color='faded' fixed='bottom'>
    <NavbarBrand>Dragn Boot</NavbarBrand>
    <Nav navbar>
      <NavItem>
        <DragContainer style={{ display: 'inline-block' }}>
          Container
        </DragContainer>
      </NavItem>
      <NavItem>
        <DragRow style={{ display: 'inline-block' }}>
          Row
        </DragRow>
      </NavItem>
      <NavItem>
        <DragCol xs='6' style={{ display: 'inline-block' }}>
          Col
        </DragCol>
      </NavItem>
    </Nav>
  </Navbar>;

module.exports = Toolbar;
