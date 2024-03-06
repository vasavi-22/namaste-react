import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Should load contact us component", () => {
//     render(<Contact />);

//     const heading = screen.getByRole("heading"); // it gets the heading in contact component

//     //Assertion
//     expect(heading).toBeInTheDocument();

// });


// test("Should load button inside Contact component", () => {
//     render(<Contact />);

//     const button = screen.getByRole("button");
//     // const button = screen.getByText("Submit");

//     //Assertion
//     expect(button).toBeInTheDocument();

// });

// test("Should load input name inside Contact component", () => {
//     render(<Contact />);

//     const inputName = screen.getByPlaceholderText("name")

//     //Assertion
//     expect(inputName).toBeInTheDocument();

// });

// test("Should load two input boxes inside Contact component", () => {
//     render(<Contact />);

//     // Querying
//     const inputBoxes = screen.getAllByRole("textbox"); // if there are multiple elements use All
//     // console.log(inputBoxes);

//     //Assertion
//     expect(inputBoxes.length).toBe(2);
//     // expect(inputBoxes.length).not.toBe(3);
// });

// Writing test cases
// render something
// query something
// assert something

// you can group multiple testcases in describe block

describe("Contact us page test cases", () => {
    // you can use it inplace of test, test alias => it
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading"); // it gets the heading in contact component
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    it("Should load button inside Contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    });
    
    it("Should load input name inside Contact component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name")
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    
    });
    
    it("Should load two input boxes inside Contact component", () => {
        render(<Contact />);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox"); // if there are multiple elements use All
        // console.log(inputBoxes);
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(3);
    });
});

