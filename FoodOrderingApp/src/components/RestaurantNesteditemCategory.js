import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({nestedcategoryDetails}) =>{
    return (
        <div>
            <h1 className="font-semibold text-2xl">{nestedcategoryDetails.title}</h1>
            {nestedcategoryDetails.categories.map((category)=>{
                return <RestaurantItemCategory key={category?.title} categoryDetails = {category}/>
            })}
        </div>
    )
}

export default RestaurantNestedItemCategory;
