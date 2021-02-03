import React, { useState, useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        //firefox
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        //opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        //microsoft
        element.current.msRequestFullscreen();
      }
      runCallback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozRequestFullscreen) {
      document.mozRequestFullscreen();
    } else if (document.webkitRequestFullscreen) {
      document.webkitRequestFullscreen();
    } else if (document.msRequestFullscreen) {
      document.msRequestFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src="http://i1.wp.com/www.spoonfulofsugarfree.com/wp-content/uploads/2010/05/img_0710.jpg?fit=300%2C400" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
