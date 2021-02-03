import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  //   if (typeof onClick !== 'function') {
  //     return;
  //   }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick); // componentDidMount, componentDidUpdate
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick); // componentWillUnmout
      }
    };
  }, []);
  return element;
};

const App = () => {
  //   const input = useRef();
  //    * useRef() : component의 어떤 부분을 선택 가능
  //   setTimeout(() => input.current?.focus(), 5000);
  //    * 연산자 ?. (Optional Chaning) : 체인의 각 참조가 유효한지 명시적으로 검증하지 않고,
  //                                    연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div>
      <div ref={title}>Hi</div>
      {/* <input ref={input} placeholder="la" /> */}
    </div>
  );
};

export default App;
