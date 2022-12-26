import React, { useState } from 'react';
import './AppTodos.css';
import { FaTrash, FaSun } from 'react-icons/fa';

export default function AppTodos() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setInput(input);
  };

  const handleClick = (e) => {
    setList((prev) => [...prev, input]);
  };

  return (
    <>
      <div className='container'>
        <div className='header'>
          <button>
            <FaSun size={24} />
          </button>

          <div>
            <input type='button' name='all' value={'All'} />
            <input type='button' name='active' value={'Active'} />
            <input type='button' name='completed' value={'Completed'} />
          </div>
        </div>
        <div className='input'>
          <input
            className='input-list'
            type='text'
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleClick}>click</button>
        </div>
        <div className='main'>
          <ol className='items'>
            {list.map((list, index) => {
              return (
                <li key={index} className='item'>
                  {list}
                  <button className='item-delete'>
                    <FaTrash />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
