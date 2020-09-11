import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoListClass from './Components/TodoListClass'
import TodoListFunction from './Components/TodoListFunction'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1 className="mt-5 mb-3">Todo App</h1>
            <TodoListFunction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
