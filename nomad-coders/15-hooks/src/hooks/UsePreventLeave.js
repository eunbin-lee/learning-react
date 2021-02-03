import React from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };

  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  // beforeunload : 웹페이지 떠나기 전 function 실행

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
