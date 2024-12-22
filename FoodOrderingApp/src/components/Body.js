import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import {useState, useEffect} from "react";
import ShimmerCard from "./ShimmerCard";


const Body = () => {
    // Local State Variable => When the state variable updates React will re-render the component.
    // let arr = useState(restaurantList);
    // let listOfRestaurants = arr[0];
    // let setListOfRestaurants = arr[1];
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [inputValue,setInputValue] = useState("");

    console.log("Body rendered");
    
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
                    <input type="text" className="nav-item"  placeholder="Enter any Restaurant or Food" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter((restaurant)=>{return restaurant.card.card.info.name.toLowerCase().includes(inputValue.toLowerCase())});
                        setFilteredListOfRestaurants(filteredList);
                    }}>
                    <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z">
                    </path>
                    </svg>
                </div>
                
            </div>
            
            <div className="restaurant-card-container">
                {
                    filteredListOfRestaurants.map(function(restaurant){
                        return <RestaurantCard key={restaurant.card.card.info.id} resObj = {restaurant} />
                    })
                }
            </div>
        </div>
    );
}


export default Body;