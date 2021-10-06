import './App.css';
import React, { useEffect } from 'react';

function ImageCell({ imageObject }) {
  const { url = '', collapsed, corsCache } = imageObject;
  const className = `image-cell ${collapsed ? 'collapsed' : ''} ${corsCache === 'hit' ? 'is-cached' : ''}`;

  useEffect(() => {
    URL.revokeObjectURL(url);
  });

  return (
    <div className={className}>
      <img alt="test" src={url} />
    </div>
  );
}

export default ImageCell;
