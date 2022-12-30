import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({
  filter,
  lists,
  handleRemove,
  handleToggle,
  handleInsert,
  handleUpdate,
}) {
  const filtered = getFilteredItems(lists, filter);

  return (
    <div className='main'>
      {filtered.map((list) => (
        <TodoListItem
          list={list}
          key={list.id}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          handleInsert={handleInsert}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

const getFilteredItems = (lists, filter) => {
  if (filter === 'all') {
    return lists;
  }
  return lists.filter((list) => list.status === filter);
};
