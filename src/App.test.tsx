import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Test", () => {
  render(<App />);
  const kanbanboard = screen.getByTestId("kanban-board");

  const cardLists = screen.getAllByTestId(/card-list/i);

  expect(kanbanboard).toBeInTheDocument();
  expect(kanbanboard).toContainElement(cardLists?.[0]);

  expect(cardLists).toHaveLength(3);

  const todoCardList = screen.getByTestId("card-list-todo");
  const progressCardList = screen.getByTestId("card-list-progress");
  const doneCardList = screen.getByTestId("card-list-done");

  expect(kanbanboard).toContainElement(todoCardList);
  expect(kanbanboard).toContainElement(progressCardList);
  expect(kanbanboard).toContainElement(doneCardList);
});
