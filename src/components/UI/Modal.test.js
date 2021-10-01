import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("renders string LLC", () => {
  render(<Modal/>);
  const linkElement = screen.getByText(/Modal/i);
  expect(linkElement).toBeInTheDocument();
});
