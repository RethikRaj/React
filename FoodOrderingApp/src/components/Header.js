import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnText, setBtnText] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between sm:justify-around bg-[white] shadow-[0_2px_5px_rgba(0,0,0,0.1)] px-4 py-2.5 border-b-2 border-b-[#ccc] border-solid m-2 rounded-lg">
            <div className="logo-container">
                <img className="hover:cursor-pointer w-20 sm:w-24" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end">
                {/* The Link component when rendered becomes anchor tag */}
                <li className="mx-2 sm:mx-4 font-bold text-[#ff6b6b] list-none">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                <li className="mx-2 sm:mx-4 font-bold text-[#ff6b6b] list-none"><Link to="/" className="transition-[color] duration-[0.3s] hover:text-[#ff3d3d]">Home</Link></li>
                <li className="mx-2 sm:mx-4 font-bold text-[#ff6b6b] list-none"><Link to="/about" className="transition-[color] duration-[0.3s] hover:text-[#ff3d3d]">About</Link></li>
                <li className="mx-2 sm:mx-4 font-bold text-[#ff6b6b] list-none"><Link to="/contact" className="transition-[color] duration-[0.3s] hover:text-[#ff3d3d]">Contact</Link></li>
                <li className="mx-2 sm:mx-4 font-bold text-[#ff6b6b] list-none"><Link to="/grocery" className="transition-[color] duration-[0.3s] hover:text-[#ff3d3d]">Grocery</Link></li>
                <button className="mx-2 sm:mx-4 px-4 py-0.5 h-10 w-32 text-white bg-red-500 border border-gray-300 rounded-lg text-lg font-medium hover:bg-red-600 hover:border-red-600 transition duration-300 ease-in-out" onClick={() => {
                    if (btnText === "Login") {
                        setBtnText("Logout");
                    } else if (btnText === "Logout") {
                        setBtnText("Login");
                    }
                }}>
                    {btnText}
                </button>
            </div>
        </div>
    );
}

// we must always export before import.
export default Header;
