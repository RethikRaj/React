import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState} from "react";


const Body = () => {
    // Local State Variable => When the state variable updates React will re-render the component.
    // let arr = useState(restaurantList);
    // let listOfRestaurants = arr[0];
    // let setListOfRestaurants = arr[1];
    
    let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    // Normal JS vaariable => Updating this variable do not change my UI
    let listOfRestaurantsJS = restaurantList;

    return (
        <div className="body">
            <div className="filter-top-rated-restaurants-container">
                <button className="filter-top-rated-restaurants-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant)=> restaurant.card.card.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                        Show Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-card-container">
                {
                    listOfRestaurants.map(function(restaurant){
                        return <RestaurantCard key={restaurant.card.card.info.id} resObj = {restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;