import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDel={onDel} onToggle={onToggle} />
      ))}
    </>
  );
};

export default TodoList;
