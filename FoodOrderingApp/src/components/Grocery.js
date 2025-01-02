import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Grocery = () =>{
    const userData = useContext(UserContext);
    return (
        <div>
            <h1>This is Grocery Page and assume they are lot of components and subcomponets. Therefore it is a good idea to load this page using lazy loading. Because only if the user wishes to buy groceries then they will visit this page and thus we can load at that point of time.</h1>

            {/* Just for demonstrating that even if this module is loaded lazily still it gets the updated value of the context */}
            <h2 className="font-bold">loggedInUser For Groceries : {userData.loggedInUser}</h2>
        </div>
    )
}

export default Grocery;