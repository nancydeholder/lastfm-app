import React from "react";
import { createMemoryHistory, History } from "history";
import { Router } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";

type RouterRenderOptions = RenderOptions & {
  route?: string;
  history?: History;
};

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RouterRenderOptions = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};
