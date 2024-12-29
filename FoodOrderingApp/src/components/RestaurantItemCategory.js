import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantItemCategory = ({categoryDetails}) => {
    console.log(categoryDetails);
    const [showItems,setShowItems] = useState(false);
    const [arrow,setArrow] = useState('▽');
    
    const handleClick = ()=>{
        setShowItems(!showItems);
        setArrow(arrow === '▽' ? '△' : '▽');
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

export const withNestedItemCategory = (RestaurantItemCategory)=>{
    return ({nestedcategoryDetails})=>{
        return (
            <div className="border-b-8 border-gray-400">
                <h1 className="font-extrabold">{nestedcategoryDetails.title}</h1>
                {nestedcategoryDetails.categories.map((category)=>{
                    return <RestaurantItemCategory key={category?.title} categoryDetails = {category}/>
                })}
            </div>
        )
    }
}

export default RestaurantItemCategory;