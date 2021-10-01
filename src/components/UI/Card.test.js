import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders string LLC", () => {
  render(<Card title="hello"/>);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
