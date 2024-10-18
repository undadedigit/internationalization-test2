import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

// Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/en-US",
}));

// Mock the translations
jest.mock(
  "../../../public/locales/en-US.json",
  () => ({
    title: "My Next.js App",
  }),
  { virtual: true }
);

describe("Header Component", () => {
  it("renders the application title", () => {
    render(<Header />);
    const titleElement = screen.getByText("My Next.js App");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders language selection buttons", () => {
    render(<Header />);
    const englishButton = screen.getByText("English");
    const frenchButton = screen.getByText("Français");
    const spanishButton = screen.getByText("Español");

    expect(englishButton).toBeInTheDocument();
    expect(frenchButton).toBeInTheDocument();
    expect(spanishButton).toBeInTheDocument();
  });

  it("has the correct CSS classes for styling", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("bg-blue-500");
    expect(headerElement).toHaveClass("text-white");
    expect(headerElement).toHaveClass("p-4");
  });

  it("renders the title with the correct CSS classes", () => {
    render(<Header />);
    const titleElement = screen.getByText("My Next.js App");
    expect(titleElement).toHaveClass("text-2xl");
    expect(titleElement).toHaveClass("font-bold");
  });
});
