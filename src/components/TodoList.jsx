import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({ lists, handleRemove, handleToggle }) {
  return (
    <div className='main'>
      {lists.map((list) => (
        <TodoListItem
          list={list}
          key={list.id}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
