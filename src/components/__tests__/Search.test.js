import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// mock fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body component", async () => {

    await act( async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ));

    const searchButton = screen.getByRole("button", {name: "Search"});
    expect(searchButton).toBeInTheDocument();
});