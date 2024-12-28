import {CDN_RESTAURANT_IMG_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    // console.log(props);
    const {resObj} = props; 
    // console.log(resObj);
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.card?.card?.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src= {CDN_RESTAURANT_IMG_URL + cloudinaryImageId} />
            <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{costForTwo}</h5>
                <p>{avgRating} ⭐</p>
            </div>
        </div>
    )
}

export default RestaurantCard;