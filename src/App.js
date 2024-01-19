import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meine Todo-Liste</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
