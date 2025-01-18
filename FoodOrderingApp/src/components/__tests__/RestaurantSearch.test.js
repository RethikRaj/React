import {act, fireEvent, render, screen} from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from "../mocks/restaurantLsitApiMock.json";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

// Creating a mock fetch function because jsdom(browser-like) do not have built in fetch functionality
global.fetch = jest.fn(()=>{
    // mock a fetch function => fetch returns as a promise which  resolves to an object which has a function called as json which also returns as a promise which resolves to the actual data.

    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search restautant list for biryani text input",async ()=>{
    await act(async ()=>{
        return render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    })

    // before click , in mock data there are seven restaurants in total => length must be 7.
    const resCardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardsBeforeSearch.length).toBe(7);

    const searchBtn = screen.getByTestId("search-icon");
    // console.log(searchBtn);

    const inputBox = screen.getByPlaceholderText("Enter any Restaurant or Food");
    //  console.log(inputBox);

    // The 2nd parameter resembles the event object passed in the onclick handler.
    fireEvent.change(inputBox , {target : {value : "biryani"}});

    fireEvent.click(searchBtn);

    // after click , in mock data there are two biryani restaurants => length must be 2.
    const resCardsAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardsAfterSearch.length).toBe(2);
    
})