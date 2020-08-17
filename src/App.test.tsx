import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders inital search form", () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId("artist:search");
  expect(form).toBeInTheDocument();
});
