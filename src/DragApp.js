const React = require('react');
const { connect } = require('react-redux');
const { createDraggable, createDroppable } = require('./drag-and-drop');
const add = require('./actions');
const uuid = require('uuid-v4');
const componentMap = require('./componentMap');

const mapStateToProps = state => ({
  page: state.pages.find(({ active }) => active),
  components: state.components
});

const mapDispatchToProps = { add };

const Drag = createDraggable();
const dropSpec = {
  drop: (props, monitor, component) => {
    const dropped = monitor.getItem();
    if (props.callback) props.callback(dropped.text);
    console.log(props, dropped);
  }
};

const Drop = createDroppable('toolbar-item', dropSpec);

const expandChildren = (children, components) =>
  children.map((child, index) => {
    if (typeof child === 'string') {
      return child;
    } else if (typeof components[child.id] === 'undefined') {
      console.log('Having issues, child: ', child.id, 'c[child]: ', components[child.id], 'typeof child: ', typeof child);
      return;
    } else {
      const element = componentMap(components[child.id].type);
      return React.createElement(
        element, {key: index}, expandChildren(components[child.id].children, components)
      );
    }
    }
  );

const Page = ({ page, components, add }) =>
  <Drop callback={ add }>
    { (page.children.length) ? expandChildren(page.children, components) : '' }
  </Drop>;

module.exports = connect(mapStateToProps, mapDispatchToProps)(Page);
