import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Test", () => {
  render(<App />);
  const kanbanboard = screen.getByTestId("kanban-board");

  expect(kanbanboard).toBeInTheDocument();

  const cardCreateBtn = screen.getByRole("button", { name: "Add Todo" });

  expect(kanbanboard).toContainElement(cardCreateBtn);

  const cardListContainer = screen.getByTestId("card-list-container");
  const todoCardList = screen.getByTestId("card-list-todo");
  const progressCardList = screen.getByTestId("card-list-progress");
  const doneCardList = screen.getByTestId("card-list-done");

  expect(kanbanboard).toContainElement(cardListContainer);

  expect(cardListContainer).toContainElement(todoCardList);
  expect(cardListContainer).toContainElement(progressCardList);
  expect(cardListContainer).toContainElement(doneCardList);

  expect(todoCardList).toHaveTextContent("TODO");
  expect(progressCardList).toHaveTextContent("PROGRESS");
  expect(doneCardList).toHaveTextContent("DONE");
});
