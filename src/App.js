import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const todos =  []
  const addTodo = () => {
    todos.push(1)
    console.log(todos)
  }

  return (
    <div>
      {todos.map((todo,index) => {
        return (
          <div>
            {todo}
          </div>
        )
      })}
      <button onClick={addTodo}>ToDo追加</button>
    </div>
  );
}

export default App;
