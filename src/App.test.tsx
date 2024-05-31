import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the App component", () => {
    render(<App />);
    screen.debug();
  });
});
