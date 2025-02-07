import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantItemCategory = ({categoryDetails,showItems,setShowItems,arrow}) => {
    
    const handleClick = ()=>{
        setShowItems();
    }

    return (
        <div className=" border-2 border-gray-400 shadow-lg rounded-lg my-2 p-4">
            <div className="flex justify-between mb-1 cursor-pointer" onClick={handleClick}>
                <span className="font-semibold text-2xl">{categoryDetails.title} ({categoryDetails.itemCards.length})</span> 
                <span className="font-semibold text-2xl">{arrow}</span>
            </div>
            <div>
                {showItems ? categoryDetails.itemCards.map((item)=>{
                    return <RestaurantItemCard key={item?.card?.info?.id} itemDetails = {item?.card?.info}/>
                }) : ""}
            </div>
        </div>
    )
}

export default RestaurantItemCategory;