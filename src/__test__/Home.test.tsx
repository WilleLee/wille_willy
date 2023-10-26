import { render, screen, fireEvent } from "@testing-library/react";

import HomePage from "@/app/page";

describe("home", () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  it("should have main element", () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeDefined();
  });
});
