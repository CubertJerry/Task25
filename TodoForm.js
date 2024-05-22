import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.description) return;
    addTodo({
      ...todo,
      id: Date.now(),
      status: 'not completed'
    });
    setTodo({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;