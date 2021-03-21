import React, { useEffect, useRef, useState } from 'react';
import './MelonForm.css';

const MelonForm = ({ onSearch }) => {
  const textRef = useRef(null);
  const [text, setText] = useState('');

  const inputChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  //검색어 실시간 검색
  useEffect(() => {
    onSearch(text);
  }, [text]);

  //'검색' 버튼 기능
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     onSearch(text);
  //     setText('');
  //     textRef.current.focus();
  //   };

  return (
    <form
      className="MelonForm"
      //   onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="음악명을 입력하세요"
        onChange={inputChange}
        ref={textRef}
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default MelonForm;
