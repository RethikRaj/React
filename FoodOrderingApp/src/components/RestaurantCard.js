import {CDN_RESTAURANT_IMG_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resObj} = props; 
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.card?.card?.info;
    
    return (
        <div class="restaurant-card w-72 md:w-80 h-auto bg-gray-100 p-4 m-4 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <div class="w-full h-60 overflow-hidden rounded-lg">
                <img 
                    class="restaurant-image w-full h-full object-cover" 
                    src={CDN_RESTAURANT_IMG_URL + cloudinaryImageId} 
                    alt={name} 
                />
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-semibold text-gray-800">{name}</h3>
                <h4 class="text-sm text-gray-600 mt-1">{cuisines.join(", ")}</h4>
                <h5 class="text-md text-green-600 mt-2 font-medium">{costForTwo}</h5>
                <p class="text-sm text-yellow-500 mt-2 font-semibold">{avgRating} ⭐</p>
            </div>
        </div>
    )
}

export default RestaurantCard;