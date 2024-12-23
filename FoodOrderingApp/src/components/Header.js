import {LOGO_URL} from "../utils/constants";
import {use, useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    const [btnText,setBtnText] = useState("Login");

    console.log("Header render happened");

    return (
        <div id="header">
            <div className="logo-container">
                <img id="logo" src={LOGO_URL} alt="logo" style={{width : "100px"}}/>
            </div>
            <div className="nav-items">
                {/* The Link component when rendered becomes anchor tag */}
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
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