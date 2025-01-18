import { CDN_RESTAURANT_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantItemCard = ({itemDetails}) =>{
    
    const dispatch = useDispatch();
    const handleAddItem = (itemDetails)=>{
        dispatch(addItem(itemDetails));
    }

    return (
        <div data-testid="restaurantItemCard" className="flex m-2 p-2 border-b-2 border-gray-400">
            <div className="w-9/12 px-4">
                <h2 className="font-semibold text-lg">{itemDetails.name}</h2>
                <p className="font-semibold">₹ {itemDetails.defaultPrice ? itemDetails.defaultPrice/100 : itemDetails.price/100}</p>
                <p className="font-semibold">⭐{itemDetails?.ratings?.aggregatedRating?.rating} ({itemDetails?.ratings?.aggregatedRating?.ratingCountV2})</p>
                <p>{itemDetails.description}</p>
            </div>
            <div className="w-3/12 relative">
                <img className="w-full rounded-2xl h-5/6" src={itemDetails.imageId ? `${CDN_RESTAURANT_ITEM_URL}${itemDetails.imageId}`: null} />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <button className="w-24 font-bold text-green-600 bg-white px-4 py-2 rounded-md shadow-md hover:bg-green-50" onClick={()=>handleAddItem(itemDetails)}>
                    Add
                    </button>
                </div>
            </div>

        </div>
    )
}

export default RestaurantItemCard;