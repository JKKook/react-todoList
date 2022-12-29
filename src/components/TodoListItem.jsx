import React, { useState } from 'react';
import '../AppTodos.css';
import { FaTrash } from 'react-icons/fa';

export default function TodoListItem({ list, handleRemove, handleToggle }) {
  // list에 해당되는 props들 재정의 필요!
  const { id, text, checked } = list;

  return (
    <div className='items'>
      <input onClick={handleToggle} type='checkbox' value={checked} />
      <div className='item'>{text}</div>
      <div className='item-delete' onClick={() => handleRemove(id)}>
        {list && <FaTrash />}
      </div>
    </div>
  );
}
