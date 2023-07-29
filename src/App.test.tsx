import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Test", () => {
  render(<App />);
  const kanbanboard = screen.getByTestId("kanban-board");

  expect(kanbanboard).toBeInTheDocument();

  const todoCardList = screen.getByTestId("card-list-todo");
  const progressCardList = screen.getByTestId("card-list-progress");
  const doneCardList = screen.getByTestId("card-list-done");

  expect(kanbanboard).toContainElement(todoCardList);
  expect(kanbanboard).toContainElement(progressCardList);
  expect(kanbanboard).toContainElement(doneCardList);
});
