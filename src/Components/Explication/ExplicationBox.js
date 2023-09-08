import React, { useState } from 'react';
import './ExplicationBox.css';

function ExplicationBox({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`explication-box ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <h3>{title}</h3>
      {expanded && <p>{content}</p>}
    </div>
  );
}

export default ExplicationBox;
