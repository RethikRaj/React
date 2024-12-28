import ShimmerCard from "./ShimmerCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const restaurantDetails = useRestaurantMenu(resId);

    if(restaurantDetails === null){
        return  (
            <div className="shimmer-card-container">
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
            </div>
        )
    }
    else{
        const {id,name,cuisines,costForTwo,avgRating,totalRatings} = restaurantDetails?.data?.cards[2]?.card?.card?.info;
        const menuDetails = restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        menuDetails.splice(0,1);
        console.log(menuDetails);
        
        return (
            <div className="RestaurantMenu">
                <h1>{name}</h1>
                <div>
                    <p>{`${avgRating} (${totalRatings/1000}k+ ratings)  --- ₹${costForTwo/100} for Two`}</p>
                    <p>{cuisines.join(", ")}</p>
                </div>
                <h2>Menu :</h2>
                <div className="menu-container">
                    {menuDetails.map((menu)=>{
                        const {title,itemCards} = menu?.card?.card;
                        
                        if(title !== undefined && itemCards !== undefined){
                            return  (
                                <div>
                                    <h2>{title} : </h2>
                                    {
                                        itemCards.map((menuItem)=>{
                                            const {name,id,price} = menuItem?.card?.info;
                                            return <li key={id}> {`${name} - ₹${price/100}`}</li>
                                        })
                                    }

                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
    
    
}

export default RestaurantMenu;