import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todosData from './components/TodoData/TodoData';

function App() {
  const sliceData = (start, end) => todosData.slice(start, end);

  const [todos1, setTodos1] = useState(sliceData(0, 5));
  const [todos2, setTodos2] = useState(sliceData(5, 10));
  const [todos3, setTodos3] = useState(sliceData(10, 15));

  return (
    <div className="BigContainer">
      <TodoList todos={todos1} />
      <TodoList todos={todos2} />
      <TodoList todos={todos3} />
    </div>
  );
}

export default App;
