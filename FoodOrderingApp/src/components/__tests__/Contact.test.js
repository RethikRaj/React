import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test("Should load contactUs component",()=>{
    render(<ContactUs/>);

    // querying
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
})

test("Should load button inside contactUs component",()=>{
    render(<ContactUs/>);

    // querying
    const button = screen.getByRole("button");

    // assertion
    expect(button).toBeInTheDocument();
})

test("Should load input name inside contactUs component",()=>{
    render(<ContactUs/>);

    // querying
    const inputName = screen.getByPlaceholderText("name");

    // assertion
    expect(inputName).toBeInTheDocument();
})

test("Should have 2 input boxes in contactUs component",()=>{
    render(<ContactUs/>);

    // querying
    const inputBoxes = screen.getAllByRole("textbox");

    // assertion
    expect(inputBoxes.length).toBe(2);
})