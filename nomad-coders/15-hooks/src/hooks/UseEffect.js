import React, { useState, useEffect } from 'react';

// useEffect : componentDidMount + componentDidUpdate + componentWillUnmount
// useEffect(effect : function, deps);
// deps : deps 리스트에 있는 값일 때만 effect가 활성화됨

const App = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(() => {
    sayHello();
  }, []);
  // useEffect(sayHello); : 첫 렌더링과 모든 변화에 sayHello 실행
  // useEffect(sayHello, []) : 어떠한 변화가 있어도 sayHello 실행 X (첫 렌더링에만 sayHello 실행)
  // useEffect(sayHello, [number]); : number에 변화가 있을 때만 sayHello 실행

  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
