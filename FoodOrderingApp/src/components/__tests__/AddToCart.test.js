import { render ,act, screen, fireEvent} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/restaurantMenuMock.json"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load restaurant menu component", async () => {
    await act(async ()=> 
        render(
            <BrowserRouter>
                <RestaurantMenu/>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText('KHALID SPECIAL STARTERS (16)');
    expect(accordionHeader).toBeInTheDocument();
})

it("Should expand on clicking accordion header",async ()=>{
    await act(async ()=> 
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText('KHALID SPECIAL STARTERS (16)');
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("restaurantItemCard").length).toBe(16);

    expect(accordionHeader).toBeInTheDocument();
})

it("Should update cart(0 items) to cart(1 items) on clicking add button",async ()=>{
    // Since i require header also => render header also onto jsDOM
    await act(async ()=> 
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header/>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText('KHALID SPECIAL STARTERS (16)');
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button",{name : "Add"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText('Cart(1 items)')).toBeInTheDocument();

})

it("Should render cart component with 2 items on clicking add button 2 times",async ()=>{
    // Since i require header also => render header also onto jsDOM
    await act(async ()=> 
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText('KHALID SPECIAL STARTERS (16)');
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button",{name : "Add"});
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getAllByTestId("cartItemCard").length).toBe(2);

})

