import React from 'react';
import '../AppTodos.css';
import { FaTrash } from 'react-icons/fa';

export default function TodoListItem({
  list,
  handleRemove,
  handleToggle,
  handleUpdate,
}) {
  // list에 해당되는 props들 재정의 필요!
  const { id, text, checked } = list;

  // list status 업데이트
  const handleStatusChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    handleUpdate({ ...list, status });
  };

  return (
    <div className='items'>
      <input
        onClick={handleToggle}
        onChange={handleStatusChange}
        type='checkbox'
        value={checked}
      />
      <div className='item'>{text}</div>
      <div className='item-delete' onClick={() => handleRemove(id)}>
        {list && <FaTrash />}
      </div>
    </div>
  );
}
