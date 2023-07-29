import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div data-testid="kanban-board">
        <div data-testid="card-list-todo"></div>
        <div data-testid="card-list-progress"></div>
        <div data-testid="card-list-done"></div>
      </div>
    </div>
  );
}

export default App;
