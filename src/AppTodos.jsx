import React, { useState, useRef, useCallback } from 'react';
import './AppTodos.css';
import TodoTemplate from './components/TodoTemplate';
import { DarkModeProvider } from './components/contexts/DarkModeContext';
import TodoTap from './components/TodoTap';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function AppTodos() {
  // Ref에 id값 담기
  const nextId = useRef(0);
  const [lists, setLists] = useState([
    {
      id: nextId,
      text: '',
      checked: false,
      status: 'active',
    },
  ]);

  // filtering
  const [filter, setFilter] = useState(filters[0]);

  const handleInsert = useCallback(
    (list) => setLists([...lists, list]),
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

  //
  const handleUpdate = (update) =>
    // 투두스를 순회하면서 그 안의 li(todo)에 접근했을 때, 업데이트 된 Id와 기존 li(todo)의 id 값이 동일하다면 업데이트 아니면 그대로 todo 반환
    setLists(lists.map((todo) => (todo.id === update.id ? update : todo)));

  return (
    <TodoTemplate>
      <DarkModeProvider>
        <TodoTap
          lists={lists}
          filters={filters}
          filter={filter}
          handleFilter={(filter) => setFilter(filter)}
        />
        <TodoInsert lists={lists} handleInsert={handleInsert} />
        <TodoList
          filter={filter}
          lists={lists}
          handleUpdate={handleUpdate}
          handleInsert={handleInsert}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      </DarkModeProvider>
    </TodoTemplate>
  );
}

const filters = ['all', 'active', 'completed'];
