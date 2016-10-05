const React = require('react');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem } = require('reactstrap');

const uuid = require('uuid-v4');

const dragContainerSpec = {
  beginDrag: ({children, ...rest}) => ({type: 'ADD_COMPONENT', component: {id: uuid(), type: 'Container', children: [], ...rest}})
}
const DragContainer = createDraggable('Container', dragContainerSpec);

const dragRowSpec = {
  beginDrag: ({children, ...rest}) => {
    return ({type: 'ADD_COMPONENT', component: {id: uuid(), type: 'Row', children: [], ...rest}})}
}
const DragRow = createDraggable('Row', dragRowSpec);

const dragColSpec = {
  beginDrag: ({children, ...rest}) => ({
    type: 'ADD_COMPONENT',
    component: {id: uuid(), type: 'Col', children: [], ...rest}
  })
}

const DragCol = createDraggable('Col', dragColSpec);

const Toolbar = () =>
  <Navbar light color='faded' fixed='bottom'>
    <NavbarBrand>Dragn Boot</NavbarBrand>
    <Nav navbar>
      <NavItem>
        <DragContainer fluid>
          Container
        </DragContainer>
      </NavItem>
      <NavItem>
        <DragRow>
          Row
        </DragRow>
      </NavItem>
      <NavItem>
        <DragCol xs='4'>
          Col
        </DragCol>
      </NavItem>
    </Nav>
  </Navbar>;

module.exports = Toolbar;
