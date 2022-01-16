import React, { useState, useRef } from "react";
import "./style.css";
import TodoList from "./TodoList";
import { v4 } from 'uuid'

 function App() {
   const [todos, setTodos] = useState([])
   const todoNameRef = useRef()

   function handleAddTodo(e) {
     const name = todoNameRef.current.value
     if (name === "") return
     setTodos(prevTodos => {
       return[...prevTodos, { id: v4(), name: name, complete: false}]
     })
     todoNameRef.current.value = null
   }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} >Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;