import React, { useState, useEffect, useRef } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('sroll', onScroll);
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div>
      <h3
        style={{
          color: y > 500 ? 'red' : 'blue',
        }}
      >
        Hello, Please scroll me!
      </h3>
    </div>
  );
};

export default App;
