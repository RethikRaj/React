// Will Implement Later 








// import { useState } from "react";
// import RestaurantItemCategory from "./RestaurantItemCategory";

// const RestaurantNestedItemCategory = ({nestedcategoryDetails,showNestedItems,setShowNestedItems}) =>{
//     const [showNestedIndex,setShowNestedIndex] = useState(null);

//     console.log("Restaurant Nested Item Category Rendered");

//     const handleNestedClick = (index)=>{
//         setShowNestedItems();
//         if(index !== showNestedIndex){
//             console.log("Hello");
//             setShowNestedIndex(index);
//         }else{
//             console.log("Hello");
//             setShowNestedIndex(null);
//         }
//     }

//     return (
//         <div>
//             <h1 className="font-semibold text-2xl">{nestedcategoryDetails.title}</h1>
//             {nestedcategoryDetails.categories.map((category,index)=>{
//                 return <RestaurantItemCategory key={category?.title} categoryDetails = {category} showItems={showNestedItems && index===showNestedIndex} setShowItems={()=>{handleNestedClick(index)}} arrow ={showNestedItems && index===showNestedIndex ? '△':'▽'}/>
//             })}
//         </div>
//     )
// }

// export default RestaurantNestedItemCategory;
