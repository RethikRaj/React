import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantDetails = (resId) => {
    const [restaurantDetails,setRestaurantDetails] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(`${RESTAURANT_MENU_API}${resId}`);
        const json = await data.json();
        setRestaurantDetails(json);
    }

    return restaurantDetails;
}

export default useRestaurantDetails;