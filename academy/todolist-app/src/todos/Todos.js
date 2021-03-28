import React, { useEffect, useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import axios from 'axios';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todoData = await getData();
      setTodos(todoData);
    };
    getTodos();
  }, []);
  const getData = async () => {
    const res = await fetch('http://localhost:3001/todos');
    const data = await res.json();
    return data;
  };

  const onAdd = async (todo) => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    setTodos([...todos, data]);
  };
  const onDel = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    });
    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert('Error');
  };
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await res.json();
    return data;
  };
  const onToggle = async (id) => {
    const todoToggle = await fetchTodo(id);
    const upTodo = { ...todoToggle, done: !todoToggle.done };

    const res = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(upTodo),
    });
    const data = await res.json();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
    // getToggle();
  };
  //   const getToggle = () => {
  //     const config = {
  //       method: 'GET',
  //     };
  //     fetch('http://localhost:3001/todos', config)
  //       .then((res) => res.json())
  //       .then((res) => setTodos(res));
  //   };
  return (
    <div>
      <TodoAdd onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
