import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio heading", () => {
  render(<App />);
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
});
