import React, { useState } from 'react';

const TodoAdd = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('일정을 입력하세요');
      return;
    }
    onAdd({ text, date, done });
    setText('');
    setDate('');
    setDone(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>일정 : </label>
        <input
          type="text"
          placeholder="일정을 입력해 주세요"
          onChange={(e) => setText(e.target.value)}
          value={text}
          name="text"
        />
      </div>
      <div>
        <label>일시 : </label>
        <input
          type="text"
          placeholder="년 월 일 시간"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          name="date"
        />
      </div>
      <div>
        <input
          type="checkbox"
          value={done}
          checked={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
        <label>중요</label>
      </div>
      <button>저장</button>
    </form>
  );
};

export default TodoAdd;
