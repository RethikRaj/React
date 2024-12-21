import {LOGO_URL} from "../utils/constants";
import {use, useState} from "react";

export const Header = () => {
    // const arr = useState("Login");
    // const btnText = arr[0];
    // const setBtnText = arr[1];

    /* Although btnText is */
    const [btnText,setBtnText] = useState("Login");

    console.log("Header render happened");

    return (
        <div id="header">
            <div className="logo-container">
                <img id="logo" src={LOGO_URL} alt="logo" style={{width : "100px"}}/>
            </div>
            <div className="nav-items">
                <a href="" className="nav-item">Home</a>
                <a href="" className="nav-item">About</a>
                <a href="" className="nav-item">Cart</a>
                <button className="nav-item" onClick={()=>{
                    if(btnText === "Login"){
                        setBtnText("Logout");
                    }else if(btnText === "Logout"){
                        setBtnText("Login");
                    }
                }}>{btnText}</button>
            </div>
        </div>
    )
}

// we must always export before import.
export default Header;