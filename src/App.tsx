import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div data-testid="kanban-board">
        <button>Add Todo</button>
        <div data-testid="card-list-container">
          <div data-testid="card-list-todo">TODO</div>
          <div data-testid="card-list-progress">PROGRESSS</div>
          <div data-testid="card-list-done">DONE</div>
        </div>
      </div>
    </div>
  );
}

export default App;
