import React, { useState } from 'react';
import './style.css';

const Likes = ({ type }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`btn-like btn-like--${type}`}
      ></button>
      <span className={`likes-count likes-count--${type}`}>{count}</span>
    </>
  );
};
export default Likes;
