import React, { useState, useRef, useCallback } from 'react';
import './AppTodos.css';
import TodoTemplate from './components/TodoTemplate';
import { DarkModeProvider } from './components/contexts/DarkModeContext';
import TodoTap from './components/TodoTap';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function AppTodos({ darkMode }) {
  const [lists, setLists] = useState([
    {
      id: 0,
      text: '',
      checked: false,
    },
  ]);

  // Ref에 id값 담기
  const nextId = useRef(0);

  const handleInsert = useCallback(
    (text) => {
      const list = {
        // current, initialValue
        id: nextId.current + 1,
        text,
        checked: false,
      };
      setLists(lists.concat(list));
      nextId.current += 1;
    },
    [lists],
  );

  const handleRemove = useCallback(
    (id) => {
      setLists(lists.filter((list) => list.id !== id));
    },
    [lists],
  );

  const handleToggle = useCallback(
    (id) => {
      // prev => !prev 로 바꿀 수 있지 않을까?
      setLists(
        lists.map((list) =>
          list.id === id ? { ...list, checked: !list.checked } : list,
        ),
      );
    },
    [lists],
  );

  // lists의 Edit

  return (
    <TodoTemplate>
      <DarkModeProvider>
        <TodoTap />
        <TodoInsert lists={lists} handleInsert={handleInsert} />
        <TodoList
          lists={lists}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      </DarkModeProvider>
    </TodoTemplate>
  );
}

const darkTheme = {
  color: 'white',
  bgColor: 'rgb(50,50,50)',
  containerColor: 'rgb(30,30,30)',
  textAlign: 'flex-end',
};

const lightTheme = {
  color: 'black',
  containerColor: 'rgb(220,220,220)',
  textAlign: 'flex-start',
  bgColor: 'white',
};
