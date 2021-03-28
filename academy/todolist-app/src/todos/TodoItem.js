import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import '../utils/css/reset.css';

const TodoContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  h3 {
    font-size: 18px;
    color: tomato;
  }
  .icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 20px;
    color: tomato;
    cursor: pointer;
  }
  &.on {
    border-color: tomato;
  }
`;

const TodoItem = ({ todo, onDel, onToggle }) => {
  const { text, date, done, id } = todo;
  return (
    <TodoContainer
      className={done ? 'on' : ''}
      onDoubleClick={() => onToggle(id)}
    >
      <h3>{text}</h3>
      <p>{date}</p>
      <FaTimes className="icon" onClick={() => onDel(id)} />
    </TodoContainer>
  );
};

export default TodoItem;
