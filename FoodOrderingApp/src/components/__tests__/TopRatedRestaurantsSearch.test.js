import {render,screen,act, fireEvent} from '@testing-library/react';
import Body from '../Body';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from "../mocks/restaurantLsitApiMock.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("Should search top rated restaurants", async ()=>{
    await act(async ()=>{
        return render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const resCardBeforeClick = screen.getAllByTestId('resCard');

    expect(resCardBeforeClick.length).toBe(7);

    const topRatedRestaurantsButton = screen.getByRole('button',{name : "Show Top Rated Restaurants"});

    fireEvent.click(topRatedRestaurantsButton);

    const resCardAfterClick = screen.getAllByTestId('resCard');

    expect(resCardAfterClick.length).toBe(5);
    

})