import React, { useState, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function TodoInsert({ handleInsert }) {
  const [input, setInput] = useState('');

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // props로 받아 온 것을 TodoInesert state에 할당
  const handleSubmit = useCallback(
    (e) => {
      // e.target.value를 onClick 이벤트 함수에 할당해주고
      handleInsert(input);
      // 한 번 입력했으면 값을 초기화
      setInput('');
      e.preventDefault(); // 브라우저 새로고침 방지
    },
    // 초기 값은 handleInsert의 input 값
    [handleInsert, input],
  );

  return (
    <form className='input' onSubmit={handleSubmit}>
      <input
        className='input-list'
        placeholder='리스트를 입력해주십시오'
        type='text'
        value={input}
        onChange={handleChange}
      />
      <button type='submit'>
        <FaPlus />
      </button>
    </form>
  );
}
