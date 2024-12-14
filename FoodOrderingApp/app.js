import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return (
        <div id="header">
            <div className="logo-container">
                <img id="logo" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="logo"/>
            </div>
            <div className="nav-items">
                <a href="" className="nav-item">Home</a>
                <a href="" className="nav-item">About</a>
                <a href="" className="nav-item">Cart</a>
                <input type="" className="nav-item"  placeholder="Enter any Restaurant or Food" />
                <span className="nav-item"><svg  viewBox="5 -1 12 25" height="17" width="17" fill="#686b78"><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg></span>
            </div>
        </div>
    )
}


const RestaurantCard = (props) =>{
    // console.log(props);
    const {resObj} = props; 
    // console.log(resObj);
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resObj?.card.card.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{costForTwo}</h5>
                <p>{avgRating} ⭐</p>
            </div>
        </div>
    )
}

const restaurantList = [
        {
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "676386",
"name": "BurgerMan",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/26/cff46055-6313-4176-9412-220cca1aa2b8_7354bbc1-8abc-4738-a39e-c320f7e5bf13.jpg",
"locality": "Copper Beach Rd",
"areaName": "ECR-Kottivakkam",
"costForTwo": "₹450 for two",
"cuisines": [
"Burgers",
"Pizzas",
"Snacks",
"Beverages"
],
"avgRating": 4.2,
"parentId": "1537",
"avgRatingString": "4.2",
"totalRatingsString": "412",
"promoted": true,
"adTrackingId": "cid=22549883~p=0~adgrpid=22549883#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=676386~eid=eb9f51e3-97e6-4b12-a4bf-2987d1790aed~srvts=1734165338612~collid=80394",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 4.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-15 00:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹175 OFF",
"subHeader": "ABOVE ₹449",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "22549883"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=676386&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "801005",
"name": "WeFit - Protein Bowls, Salads & Sandwiches",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/0e410cf2-d192-4395-acbe-7ea4d7d1b964_801005.JPG",
"locality": "Sholinganallur",
"areaName": "Parameswaran Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Keto",
"Snacks"
],
"avgRating": 4.7,
"parentId": "355285",
"avgRatingString": "4.7",
"totalRatingsString": "308",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-15 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=801005&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "25881",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/270b75cc-09ab-4da9-96ac-7bf67effa7c9_25881.JPG",
"locality": "Shollinganalur",
"areaName": "Sholinganallur",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.5,
"parentId": "2",
"avgRatingString": "4.5",
"totalRatingsString": "15K+",
"promoted": true,
"adTrackingId": "cid=22035100~p=4~adgrpid=22035100#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25881~eid=dd5b9890-0708-45f8-84f4-1788f5419219~srvts=1734165338612~collid=80394",
"sla": {
"deliveryTime": 15,
"lastMileTravel": 0.9,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "0.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 23:57:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "22035100"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=25881&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "952508",
"name": "Salsa Salad",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/10/9d18f5d0-48ab-4959-9bc8-097a863f7092_b8c98317-367e-4e56-8e65-40f18fc0c785.jpg",
"locality": "Bhaggyam  Pragathi Phase 1 Service Road",
"areaName": "Karapakkam",
"costForTwo": "₹500 for two",
"cuisines": [
"Juices",
"Salads"
],
"avgRating": 5,
"parentId": "302517",
"avgRatingString": "5.0",
"totalRatingsString": "2",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 19:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹50",
"discountTag": "POCKET HERO",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
},
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=952508&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "373294",
"name": "Honey Moon Juice & Snacks Bar",
"cloudinaryImageId": "3036f0e6d93d282f117fda5180fc7331",
"locality": "Pallikaranai",
"areaName": "Honey Moon Juice & Snacks Bar",
"costForTwo": "₹300 for two",
"cuisines": [
"Arabian",
"Fast Food",
"Beverages",
"Juices",
"Ice Cream"
],
"avgRating": 3.8,
"parentId": "96874",
"avgRatingString": "3.8",
"totalRatingsString": "90",
"promoted": true,
"adTrackingId": "cid=22601591~p=7~adgrpid=22601591#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=373294~eid=20a9d69a-4522-4bd0-bd01-39cee950e68f~srvts=1734165338612~collid=80394",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 9.1,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "9.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹50",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "2.7",
"ratingCount": "9"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "22601591"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=373294&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "592995",
"name": "HRX by EatFit",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/4efbc0ce-fad7-45a1-81cc-c1988f31b6a1_592995.JPG",
"locality": "4th Cross Street",
"areaName": "Muthamzhil Nagar",
"costForTwo": "₹450 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Burgers"
],
"avgRating": 4.4,
"parentId": "335529",
"avgRatingString": "4.4",
"totalRatingsString": "663",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 23:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"iconId": "guiltfree/GF_Logo_android_3x",
"description": "",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹139",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=592995&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "317861",
"name": "Kebabistaan",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/3e5165f3-f65d-4b8c-a97e-0ac20d78e9d7_7ad30828-3426-49ed-a504-741bb45be046.jpeg",
"locality": "Bazaar Main Road",
"areaName": "Madipakkam",
"costForTwo": "₹300 for two",
"cuisines": [
"Beverages",
"Chinese",
"Kebabs",
"Tandoor",
"Grill",
"Biryani",
"Mughlai",
"Arabian",
"Lebanese",
"North Indian"
],
"avgRating": 3.8,
"parentId": "8877",
"avgRatingString": "3.8",
"totalRatingsString": "7.5K+",
"promoted": true,
"adTrackingId": "cid=22577229~p=8~adgrpid=22577229#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=317861~eid=3e46f647-2e9f-4df5-bb9e-9df3df3ec90d~srvts=1734165338612~collid=80394",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 9.6,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "9.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "22577229"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=317861&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "91611",
"name": "D.I.E.T Carry",
"cloudinaryImageId": "mazfyah6wcdsp3t6odyo",
"locality": "OMR",
"areaName": "Ezhil Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Keto"
],
"avgRating": 4.5,
"parentId": "17572",
"avgRatingString": "4.5",
"totalRatingsString": "14K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 5.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 22:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"iconId": "guiltfree/GF_Logo_android_3x",
"description": "",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
}
]
},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=91611&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "841478",
"name": "California Burrito",
"cloudinaryImageId": "e984d6d7eee5d187e338bfdc9fda7572",
"locality": "Vijaya Nagar",
"areaName": "Velachery",
"costForTwo": "₹250 for two",
"cuisines": [
"Mexican",
"American",
"Salads",
"Continental",
"Keto",
"Healthy Food",
"Beverages",
"Snacks",
"Desserts",
"Fast Food"
],
"avgRating": 4.6,
"parentId": "1252",
"avgRatingString": "4.6",
"totalRatingsString": "2.2K+",
"promoted": true,
"adTrackingId": "cid=22583142~p=9~adgrpid=22583142#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=841478~eid=662d1230-8f4a-4125-9b1a-b1d46acae3ff~srvts=1734165338612~collid=80394",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 10.6,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "10.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-15 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "22583142"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=841478&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "522847",
"name": "The quality home food",
"cloudinaryImageId": "15d89846ca8e0d8ce5d873bb58b8f341",
"areaName": "Medavakkam",
"costForTwo": "₹250 for two",
"cuisines": [
"Snacks",
"Fast Food",
"Beverages"
],
"avgRating": 3.8,
"parentId": "311942",
"avgRatingString": "3.8",
"totalRatingsString": "49",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-12-14 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=522847&source=collection&query=Salad",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
];


const Body = () => {
    return (
        <div className="body">
            <div className="restaurant-card-container">
                {/* {[1,2,3,4,5]} */}
                
                {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered. */}
                {
                    restaurantList.map(function(restaurant){
                        return <RestaurantCard key={restaurant.card.card.info.id} resObj = {restaurant} />
                    })
                }
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <h4>© {new Date().getFullYear()} My Food Ordering App Limited</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

