import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header"; // Adjust this path as needed

describe("Header Component", () => {
  it("renders the application title", () => {
    render(<Header />);
    const titleElement = screen.getByText("My Next.js App"); // Adjust this text to match your actual header text
    expect(titleElement).toBeInTheDocument();
  });
});
