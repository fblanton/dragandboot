const React = require('react');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem } = require('reactstrap');
const { Container, Row, Col, H1 } = require('./toolbar-items')

const Toolbar = () =>
  <Navbar light color='faded' fixed='bottom'>
    <NavbarBrand>Dragn Boot</NavbarBrand>
    <Nav navbar>
      <NavItem>
        <Container>
          Container
        </Container>
      </NavItem>
      <NavItem>
        <Row>
          Row
        </Row>
      </NavItem>
      <NavItem>
        <Col xs='4'>
          Col
        </Col>
      </NavItem>
      <NavItem>
        <H1 children="Hello World">
          h1
        </H1>
      </NavItem>
    </Nav>
  </Navbar>;

module.exports = Toolbar;
