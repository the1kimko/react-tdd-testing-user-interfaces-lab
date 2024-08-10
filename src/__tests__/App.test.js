import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself with alt text identifying image content", () => {
    render(<App />);
    const image = screen.getByAltText("A picture of myself")
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://www.specfictionshop.com/cdn/shop/files/MAIN-MAGNETO_1b826574-a40c-4f68-81c1-aedfebded650_800x.png?v=1707433038");
  })

  test("displays a second level heading with the text `About Me`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    expect(secondLevelHeading).toBeInTheDocument();
  })

  test("displays a paragraph for your biography", () => {
    render(<App />);
    const biography = screen.getByText(/I am a passionate developer/i);
    expect(biography).toBeInTheDocument();
  })

  test("displays two links styled as buttons for GitHub and LinkedIn", () => {
    render(<App />);
    const githubLink = screen.getByRole('link', {
        name: /GitHub/i
    });
    const linkedinLink = screen.getByRole('link', {
        name: /LinkedIn/i
    });
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
});