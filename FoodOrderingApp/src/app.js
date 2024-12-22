import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

// configuring routing of app
const appRouter = createBrowserRouter([
    {
        "path" : "/",
        "element" : <AppLayout/>,
        "errorElement" : <Error/>
    },
    {
        "path" : "/about",
        "element" : <AboutUs/>
    },
    {
        "path" : "/contact",
        "element" : <ContactUs/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

