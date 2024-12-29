import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-white m-2 rounded-lg border-2 border-[#ccc]">
            <img className="hover:cursor-pointer w-24" src={LOGO_URL} alt="logo" />
            <h4>© {new Date().getFullYear()} My Food Ordering App Limited</h4>
        </div>
    )
}

export default Footer;