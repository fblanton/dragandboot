const React = require('react');
const enableDrag = require('./enableReactDnd');

const AHello = ({ isDragging, key, onClick, children }) => {
  return (
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h2 key={ key } onClick={ onClick }>{ children }</h2>
    </div>
  );
}

module.exports = enableDrag(AHello);
