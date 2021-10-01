import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders string LLC", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Refayat Haque/i);
  expect(linkElement).toBeInTheDocument();
});
