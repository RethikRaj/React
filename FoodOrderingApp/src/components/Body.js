import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import {useState, useEffect,useContext} from "react";
import ShimmerCard from "./ShimmerCard";
import {Link} from "react-router-dom";
import {SVG_PATH_D_ATTRIBUTE} from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useListOfRestaurants from "../utils/useListOfRestaurants.js";
import UserContext from "../utils/UserContext.js";


const Body = () => {
    const {listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants} = useListOfRestaurants();
    const [inputValue,setInputValue] = useState("");
    const onlineStatus = useOnlineStatus();

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

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
            <div className="flex flex-wrap items-center justify-center">
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
        <div className="flex-1 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] m-3 px-10 rounded-lg">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 p-4">
                <button className="border border-gray-300 px-6 py-3 w-56 sm:w-72 bg-red-500 text-white text-lg rounded-md shadow-md hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring focus:ring-red-300 transition duration-300 ease-in-out" onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant)=> restaurant.card.card.info.avgRating > 4);
                        setFilteredListOfRestaurants(filteredList);
                    }}>
                        Show Top Rated Restaurants
                </button>
                <div className="flex items-center">
                    <input type="text"  placeholder="Enter any Restaurant or Food" value={inputValue} className="w-full sm:w-96 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out" onChange={(e)=>{setInputValue(e.target.value)}}/>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128" className="cursor-pointer"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter((restaurant)=>{return restaurant.card.card.info.name.toLowerCase().includes(inputValue.toLowerCase())});
                        setFilteredListOfRestaurants(filteredList);
                    }} data-testid = "search-icon">
                    <path d={SVG_PATH_D_ATTRIBUTE}>
                    </path>
                    </svg>
                </div>
                <div className="flex items-center">
                    <label>UserName : </label>
                    <input className="border-2 border-black m-2 p-2" type="text" placeholder="Enter user name" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
                </div>
                
            </div>
            
            <div className="flex flex-wrap justify-center">
                {
                    filteredListOfRestaurants.map(function(restaurant){
                        const {id} = restaurant.card.card.info;
                        return (
                            <Link key={id} to={`/restaurants/${id}`}>
                                {restaurant.card.card.info.promoted ? 
                                <PromotedRestaurantCard resObj = {restaurant}/> : 
                                <RestaurantCard  resObj = {restaurant} />
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Body;