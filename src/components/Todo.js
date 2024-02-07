import React, { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  console.log(todo);
  return (
    <div className="App">
      <h2>To Do Application</h2>

      <input type='text' onChange={(event) => {
        setText(event.target.value);
      }} />
      <button onClick={() => {
        setTodo([...todo,text])
      }}>Add List</button>

      {
          todo.map((item) => (
            <div key={item}>The item is : {item}</div>
          ))
      }
    </div>
  );
}

export default Todo;