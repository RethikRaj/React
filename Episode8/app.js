import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import UnMountUseCase from "./UnmountUseCase";
import UseEffectInDepth from "./UseEffectInDepth";


const AppLayout = () => {
    return (
        <div className="app">
            <Link to={'/'}>Home</Link>
            <Link to={'/unmount'}>UnMountUseCase</Link>
            <Link to={'/use-effect-in-depth'}>useEffectInDepth</Link>

            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        "path" : "/",
        "element" : <AppLayout/>,
        "children" : [
            {
                "path" : "/unmount",
                "element" : <UnMountUseCase/>
            },
            {
                "path" : "/use-effect-in-depth",
                "element" : <UseEffectInDepth/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);