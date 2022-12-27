import React from 'react';
// import TodoTap from './TodoTap';
// import TodoList from './TodoList';
// import TodoInsert from './TodoInsert';

export default function TodoTemplate({ children }) {
  return (
    <div className='template'>
      <div className='container'>{children}</div>;
    </div>
  );
}
