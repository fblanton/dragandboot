const React = require('react');
const enableDrag = require('./enableReactDnd');

const Toolbar = ({ isDragging }) => {
  return (
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h2>My Toolbar Goes Here</h2>
    </div>
  );
}

module.exports = enableDrag(Toolbar);
