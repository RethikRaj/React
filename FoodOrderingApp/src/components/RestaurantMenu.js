import { use, useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import {useParams} from "react-router-dom";

const RestaurantMenu = () =>{
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const {resId} = useParams();
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${resId}&&catalog_qa=undefined&query=Biryani&submitAction=ENTER`);
        const json = await data.json();
        setRestaurantDetails(json);
    }

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