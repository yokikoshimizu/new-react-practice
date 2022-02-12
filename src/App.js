import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  //Reactで変数を使うときは、↓のようにuseStateを使って変数と関数(setter)を定義する
  //値を更新するときはsetter関数を使って更新
  // const todos =[] ←このようなjsの書き方だと、React上では再描画が行われない
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("");

  // const addTodo = () => {
  //   const newTodos = [...todos]
  //   newTodos.push({
  //     id: 1,
  //     title: 'title',
  //     //↓フラグ系のプロパティにはtrue,falseが妥当
  //     isDone: false
  //   })
  //   setTodos(newTodos)
  //   console.log(todos)
  // }

console.log('todos', todos)

  return (
    <>
      Title: <input value={text} onChange={(e) => setText(e.target.value)} />
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{ backgroundColor: todo.isDone === true ? "gray" : "white" }}
          >
            {todo.title}
            <button
              onClick={() => {
                const newTodos = todos.map((v) =>
                  v.id === todo.id ? { ...v, isDone: true } : v
                );
                setTodos(newTodos);
              }}
            >
              完了
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          const newTodos = [...todos];
          newTodos.push({ id: todos.length + 1, title: text, isDone: false });
          setTodos(newTodos);
        }}
      >
        追加
      </button>
    </>
  );
}

export default App;
