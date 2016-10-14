const React = require('react');
const { connect } = require('react-redux');
const { createDraggable, createDroppable } = require('./dnd-higher-order-components');
const { Navbar, NavbarBrand, Nav, NavItem, Button, ButtonGroup } = require('reactstrap');
const { Container, Row, Col, H1, H3, P, Jumbotron } = require('./toolbar-items');
const ViewDownload = require('./toolbar-items/ViewDownload');

const Toolbar = ({ dispatch, exportHTML, activePage }) =>
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
    <ViewDownload />
  </Navbar>;

module.exports = Toolbar;
