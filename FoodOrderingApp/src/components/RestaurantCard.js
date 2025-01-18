import {CDN_RESTAURANT_IMG_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resObj} = props; 
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.card?.card?.info;
    
    return (
        <div data-testid="resCard" className="restaurant-card w-72 md:w-80 h-auto bg-gray-100 p-4 m-4 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <div className="w-full h-60 overflow-hidden rounded-lg">
                <img 
                    className="restaurant-image w-full h-full object-cover" 
                    src={CDN_RESTAURANT_IMG_URL + cloudinaryImageId} 
                    alt={name} 
                />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <h4 className="text-sm text-gray-600 mt-1">{cuisines.join(", ")}</h4>
                <h5 className="text-md text-green-600 mt-2 font-medium">{costForTwo}</h5>
                <p className="text-sm text-yellow-500 mt-2 font-semibold">{avgRating} ⭐</p>
            </div>
        </div>
    )
}

// Higher Order Component : Takes RestaurantCard as input and returns a PromotedRestaurantCard
export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div className="relative">
                <p className="absolute top-0 left-0 bg-red-400 text-white px-4 py-2 z-10 rounded-lg">Promoted</p>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;