import React from 'react';

const TodoFilter = ({ setStatusFilter }) => {
  return (
    <div>
      <button onClick={() => setStatusFilter('all')}>All</button>
      <button onClick={() => setStatusFilter('completed')}>Completed</button>
      <button onClick={() => setStatusFilter('not completed')}>Not Completed</button>
    </div>
  );
};

export default TodoFilter;