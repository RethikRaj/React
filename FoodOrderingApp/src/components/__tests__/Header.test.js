import { fireEvent, render , screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
// import UserContext from "../../utils/UserContext"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with a Cart 0 items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartWithZeroItems = screen.getByText("Cart(0 items)");

    expect(cartWithZeroItems).toBeInTheDocument();
});

it("Should render header component with a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
});

it("Should change Login Button to Logout Button on click and vice versa", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});

    fireEvent.click(logoutButton);

    const loginButtonAfterClick = screen.getByRole("button", {name : "Login"});

    expect(loginButtonAfterClick).toBeInTheDocument();
});

