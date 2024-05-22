import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([ ...todos, todo ]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === 'all') return true;
    return todo.status === statusFilter;
  });

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoFilter setStatusFilter={setStatusFilter} />
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;