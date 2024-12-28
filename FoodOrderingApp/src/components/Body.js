import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import {useState, useEffect} from "react";
import ShimmerCard from "./ShimmerCard";
import {Link} from "react-router-dom";
import {SVG_PATH_D_ATTRIBUTE} from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useListOfRestaurants from "../utils/useListOfRestaurants.js";


const Body = () => {
    const {listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants} = useListOfRestaurants();
    const [inputValue,setInputValue] = useState("");
    const onlineStatus = useOnlineStatus();

    // Conditional Rendering : Rendering based on some condition

    // Early Return
    if(onlineStatus === false){
        return (
            <h1>Looks Like You are Offline . Please check your internet connection.</h1>
        )
    }
    
    // Ternary Operator 
    return filteredListOfRestaurants.length === 0 ? 
     (
            <div className="shimmer-card-container">
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
    ) 
    :
    (
        <div className="body">
            <div className="filter-container">
                <button className="filter-top-rated-restaurants-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant)=> restaurant.card.card.info.avgRating > 4);
                        setFilteredListOfRestaurants(filteredList);
                    }}>
                        Show Top Rated Restaurants
                </button>
                <div className="search-box">
                    <input type="text"  placeholder="Enter any Restaurant or Food" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter((restaurant)=>{return restaurant.card.card.info.name.toLowerCase().includes(inputValue.toLowerCase())});
                        setFilteredListOfRestaurants(filteredList);
                    }}>
                    <path d={SVG_PATH_D_ATTRIBUTE}>
                    </path>
                    </svg>
                </div>
                
            </div>
            
            <div className="restaurant-card-container">
                {
                    filteredListOfRestaurants.map(function(restaurant){
                        const {id} = restaurant.card.card.info;
                        return (
                            <Link key={id} to={`/restaurants/${id}`} className="restaurant-card-link">
                                <RestaurantCard  resObj = {restaurant} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Body;