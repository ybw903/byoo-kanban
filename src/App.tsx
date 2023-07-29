import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div data-testid="kanban-board">
        <div data-testid="card-list"></div>
      </div>
    </div>
  );
}

export default App;
