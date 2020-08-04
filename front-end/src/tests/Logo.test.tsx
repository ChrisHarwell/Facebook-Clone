import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Logo from "../components/nav/Logo";

test("Logo renders properly", () => {
    render(<Logo />);
});

test("Has svg title that describes the logo", () => {
    const container = render(<Logo />);
    container.getByTitle("facebook logo");
});

test("When button is clicked it takes user to the landing page", () => {
    const container = render(<Logo />);

    const fbLogo = container.getByTestId(/logo/i);
    const leftClick = { button: 1};

    fireEvent.click(fbLogo, leftClick )
})