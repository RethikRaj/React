import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import {useState, useEffect} from "react";
import ShimmerCard from "./ShimmerCard";


const Body = () => {
    // Local State Variable => When the state variable updates React will re-render the component.
    // let arr = useState(restaurantList);
    // let listOfRestaurants = arr[0];
    // let setListOfRestaurants = arr[1];
    
    let [listOfRestaurants, setListOfRestaurants] = useState([]);

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

            setListOfRestaurants(jsonData.data.cards);
        }catch(err){
            console.log(err.message);
        }   
    }

    // Conditional Rendering : Rendering based on some condition

    // Early Return
    // if (listOfRestaurants.length === 0) {
    //     return (
    //         <div className="shimmer-card-container">
    //             <ShimmerCard />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //             <Shimmer Card />
    //         </div>
    //     );
    // }

    
    // Ternary Operator 
    return listOfRestaurants.length === 0 ? 
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
    );
}


export default Body;