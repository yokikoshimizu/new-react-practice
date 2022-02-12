import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  //Reactで変数を使うときは、↓のようにuseStateを使って変数と関数(setter)を定義する
  //値を更新するときはsetter関数を使って更新
  // const todos =[] ←このようなjsの書き方だと、React上では再描画が行われない
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    const newTodos = [...todos]
    newTodos.push(1)
    setTodos(newTodos)
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
