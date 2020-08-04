import { render, fireEvent, waitFor } from "@testing-library/react";
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


// TODO test if button takes user to the landing page 
// try window.location
test("When button is clicked it takes user to the landing page", async () => {
    window.location.href = "http://localhost/home"

    const container = render(<Logo />);

    const fbLogo = container.getByTestId(/logo/i);
    const leftClick = { button: 1};

    fireEvent.click(fbLogo, leftClick );
    await waitFor(() => {
        expect(window.location.href).toBe("http://localhost/")
    });
});