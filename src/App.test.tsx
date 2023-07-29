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
});
