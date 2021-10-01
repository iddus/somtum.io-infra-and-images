import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

test("renders string LLC", () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Nav/i);
  expect(linkElement).toBeInTheDocument();
});
