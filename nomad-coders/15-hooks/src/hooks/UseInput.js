import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 11;
  // 10자를 초과하면 validator = false; → willUpdate = false; → setValue 실행 X
  // 예를 들어, 특수문자 포함을 원하지 않을때 사용 가능
  const name = useInput('Your name', maxLen);

  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
