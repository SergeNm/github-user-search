import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "../src/redux/reducers";
import server from "./mocks/server";

interface WrapperProps {
  children?: React.ReactNode;
}

function render(ui: any, { route = "/", initialState = {} } = {}) {
  window.history.pushState({}, "Test page", route);
  const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
  });

  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper });
}

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
