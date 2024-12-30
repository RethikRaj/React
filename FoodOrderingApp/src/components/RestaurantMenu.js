import RestaurantItemShimmer from "./RestaurantItemShimmer";
import {useParams} from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const restaurantDetails = useRestaurantDetails(resId);

    const [showIndex,setShowIndex] = useState(null);
    

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
        let categories = [];
        const requiredData = restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        for (const item of requiredData) {
            const card = item.card.card;
            const type = card['@type'];

            if(type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                categories.push(card);
            }else if(type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                categories.push(...card.categories);
            }
        }

        return (
            <div className="flex flex-col items-center ">
                <div className="border-2 border-black w-7/12 p-4 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="font-semibold text-lg">{`⭐${avgRating} (${totalRatings} ratings) - ₹${costForTwo/100} for two`} </p>
                    <p className="font-semibold text-md text-orange-500 underline">{cuisines.join(", ")}</p>
                </div>
                <div className="w-7/12 m-4 p-2"> 
                    {categories.map((category,index)=>{        
                        return (
                            <div key={category.title} className="border-b-8 border-gray-300">
                                <RestaurantItemCategory  categoryDetails = {category} showItems={index===showIndex ? true : false} setShowItems={()=>{index !== showIndex ? setShowIndex(index):setShowIndex(null)}} arrow={index===showIndex ? '△':'▽'} />
                            </div> 
                        )
                    })}
                </div>
            </div>
           
        )
    }
    
    // categoory?.card?.card.categories
}

export default RestaurantMenu;