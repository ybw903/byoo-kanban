import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Test", () => {
  render(<App />);
  const kanbanboard = screen.getByTestId("kanban-board");

  expect(kanbanboard).toBeInTheDocument();
  expect(kanbanboard).toContainElement(screen.getByTestId(/card-list/i));
});
