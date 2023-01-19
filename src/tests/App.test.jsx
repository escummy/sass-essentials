import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/favorites/i);
  expect(linkElement).toBeInTheDocument();
});

describe("App", () => {
  it("renders headline", () => {
    render(<App element="favorites" />);

    screen.debug();
  });
});
