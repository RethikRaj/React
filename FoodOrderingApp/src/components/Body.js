import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import {useState, useEffect} from "react";
import ShimmerCard from "./ShimmerCard";
import {Link} from "react-router-dom";
import {SVG_PATH_D_ATTRIBUTE} from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {
    // Local State Variable => When the state variable updates React will re-render the component.
    // let arr = useState(restaurantList);
    // let listOfRestaurants = arr[0];
    // let setListOfRestaurants = arr[1];
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [inputValue,setInputValue] = useState("");

    const onlineStatus = useOnlineStatus();
    
    // Normal JS variable => Updating this variable do not change my UI
    // let listOfRestaurantsJS = restaurantList;


    //useEffect hook
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

            const jsonData = await data.json();

            console.log(jsonData.data.cards.splice(0,3));

            setListOfRestaurants(jsonData?.data?.cards);

            setFilteredListOfRestaurants(jsonData?.data?.cards);


        }catch(err){
            console.error(err.message);
        }   
    }

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