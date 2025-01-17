import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import restaurantCardPropsMock from "../mocks/restaurantCardPropsMock.json";
import "@testing-library/jest-dom"

it("Should render restaurant card component with props data",()=>{
    render(
        <RestaurantCard resObj={restaurantCardPropsMock}/>
    );

    const nameOfRestaurant = screen.getByText("Thalassery Restaurant");

    expect(nameOfRestaurant).toBeInTheDocument();
})

it("Should render restaurant promoted card with promoted label",()=>{
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(
        <PromotedRestaurantCard resObj = {restaurantCardPropsMock}/>
    )

    const isPromoted = screen.getByText("Promoted");

    expect(isPromoted).toBeInTheDocument();
})


// Example : Wont Work since mock data is promoted.
// it("Should not render promoted label if not promoted", () => {
//     const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
//     render(
//         <PromotedRestaurantCard resObj={{ isPromoted: false }} />
//     );

//     const isPromoted = screen.queryByText("Promoted");
//     expect(isPromoted).not.toBeInTheDocument();
// });
