import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>{return import("./components/Grocery")});

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

// configuring routing of app
const appRouter = createBrowserRouter([
    {
        "path" : "/",
        "element" : <AppLayout/>,
        "children" : [
            {
                "path" : "/",
                "element" : <Body/>
            },
            {
                "path" : "/about",
                "element" : <AboutUs/>
            },
            {
                "path" : "/contact",
                "element" : <ContactUs/>
            },
            {
                "path" : "/grocery",
                "element" : <Suspense fallback={<h1>Wait here until Grocery lazy loads.</h1>}><Grocery/></Suspense>
            },
            {
                "path" : "/restaurants/:resId",
                "element" : <RestaurantMenu/>
            },
        ],
        "errorElement" : <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

