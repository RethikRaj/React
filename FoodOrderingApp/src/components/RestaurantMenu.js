import RestaurantItemShimmer from "./RestaurantItemShimmer";
import {useParams} from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNesteditemCategory";

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const restaurantDetails = useRestaurantDetails(resId);


    if(restaurantDetails === null){
        return  (
            <div className="flex flex-col items-center">
                <RestaurantItemShimmer/>
                <RestaurantItemShimmer/>
                <RestaurantItemShimmer/>
                <RestaurantItemShimmer/>
                <RestaurantItemShimmer/>
                <RestaurantItemShimmer/>
            </div>
        )
    }
    else{
        const {id,name,cuisines,costForTwo,avgRating,totalRatings} = restaurantDetails?.data?.cards[2]?.card?.card?.info;
        const categories = restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
            return item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        })

        
        
        return (
            <div className="flex flex-col items-center ">
                <div className="border-2 border-black w-7/12 p-4 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="font-semibold text-lg">{`⭐${avgRating} (${totalRatings} ratings) - ₹${costForTwo/100} for two`} </p>
                    <p className="font-semibold text-md text-orange-500 underline">{cuisines.join(", ")}</p>
                </div>
                <div className="w-7/12 m-4 p-2"> 
                    {categories.map((category)=>{
                        return category?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ?
                        <div key={category?.card?.card?.title} className="border-b-8 border-gray-300">
                            <RestaurantItemCategory  categoryDetails = {category?.card?.card}/>
                        </div> 
                        :
                        <div key={category?.card?.card?.title} className="border-b-8 border-gray-300">
                            <RestaurantNestedItemCategory  nestedcategoryDetails={category?.card?.card}/>
                        </div>
                    })}
                </div>
            </div>
           
        )
    }
    
    
}

export default RestaurantMenu;

//