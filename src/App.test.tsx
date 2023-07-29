import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const kanbanboard = screen.getByTestId("kanban-board");
  expect(kanbanboard).toBeInTheDocument();
});
