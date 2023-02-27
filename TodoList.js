import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {                               // this code represents if user adds only blank space or g .          g 
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];     // add other todos ""..."" represents other todos along with todo

    setTodos(newTodos);
    console.log(...todos);   //console. log specifically is a method for developers to write code to inconspicuously inform the developers what the code is doing. It can be used to alert you that there's an issue, but shouldn't take the place of an interactive debugger when it comes time to debug the code.

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}                    // adding todo.js to implement with todolist
        completeTodo={completeTodo}
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;