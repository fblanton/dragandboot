const React = require('react');
const { connect } = require('react-redux');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem, Button } = require('reactstrap');
const { Container, Row, Col, H1, H3, P, Jumbotron } = require('./toolbar-items')

const Toolbar = ({ dispatch }) =>
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
        <Col>
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
    </Nav>
    <Nav className="pull-xs-right" navbar>
      <Button color="primary" onClick={ () => dispatch({type: 'TOGGLE_EXPORT'})}>View HTML</Button>
    </Nav>
  </Navbar>;

module.exports = connect()(Toolbar);
