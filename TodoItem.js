import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState({ ...todo });

  const handleStatusChange = (e) => {
    updateTodo({
      ...todo,
      status: e.target.value
    });
  };

  const handleEdit = () => {
    updateTodo({
      ...newTodo
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTodo.name}
            onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          />
          <input
            type="text"
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <select value={todo.status} onChange={handleStatusChange}>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;