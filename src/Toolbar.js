const React = require('react');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem } = require('reactstrap');
const { Container, Row, Col, H1, H3, P, Jumbotron, JumbotronFluid } = require('./toolbar-items')

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
        <Col xs={{size: 4, offset: 4}}>
          Col
        </Col>
      </NavItem>
      <NavItem>
        <H1>
          Header
        </H1>
      </NavItem>
      <NavItem>
        <H3>
          Small Header
        </H3>
      </NavItem>
      <NavItem>
        <P>
          Paragraph
        </P>
      </NavItem>
      <NavItem>
        <Jumbotron>
          Jumbotron
        </Jumbotron>
      </NavItem>
      <NavItem>
        <JumbotronFluid>
          Jumbotron Fluid
        </JumbotronFluid>
      </NavItem>
    </Nav>
  </Navbar>;

module.exports = Toolbar;
