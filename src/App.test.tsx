import React from "react";
import { render, screen, waitFor, fireEvent } from "./testUtils";
import App from "./App";

describe("Testing Integration of The Whole App", () => {
  render(<App />);
  test("Should Render The App, User Data Fetched, then User should be Searched", async () => {
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();
    });
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Dark Mode"));
    await waitFor(() => {
      expect(screen.getByText("Light Mode")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/example1/i)).toBeInTheDocument();
    });

    const searchInput = screen.getByLabelText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "example2" } });

    await waitFor(() => {
      expect(screen.getByText(/example2/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/example1/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText(/example1/i)).not.toBeInTheDocument();
    });
    fireEvent.change(searchInput, { target: { value: "example1" } });
    await waitFor(() => {
      expect(screen.getByText(/example1/i)).toBeInTheDocument();
    });
  });
});
