import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders string LLC", () => {
  render(<App />);
  const linkElement = screen.getByText(/LLC/i);
  expect(linkElement).toBeInTheDocument();
});
