import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact Us page Test Cases",()=>{

    test("Should load contactUs component",()=>{
        render(<ContactUs/>);

        // querying
        const heading = screen.getByRole("heading");

        // assertion
        expect(heading).toBeInTheDocument();
    })

    it("Should load button inside contactUs component",()=>{
        render(<ContactUs/>);

        // querying
        const button = screen.getByRole("button");

        // assertion
        expect(button).toBeInTheDocument();
    })

    it("Should load input name inside contactUs component",()=>{
        render(<ContactUs/>);

        // querying
        const inputName = screen.getByPlaceholderText("name");

        // assertion
        expect(inputName).toBeInTheDocument();
    })

    it("Should have 2 input boxes in contactUs component",()=>{
        render(<ContactUs/>);

        // querying
        const inputBoxes = screen.getAllByRole("textbox");

        // assertion
        expect(inputBoxes.length).toBe(2);
    })
})

