import { useState,useEffect} from "react";


const useListOfRestaurants = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

            const jsonData = await data.json();

            jsonData.data.cards.splice(0,3);

            setListOfRestaurants(jsonData?.data?.cards);

            setFilteredListOfRestaurants(jsonData?.data?.cards);
            
        }catch(err){
            console.error(err.message);
        } 
    }

    return {listOfRestaurants,setListOfRestaurants,filteredListOfRestaurants,setFilteredListOfRestaurants};
}

export default useListOfRestaurants;