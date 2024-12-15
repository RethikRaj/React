import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
        <div className="footer">
            <img id="logo" src={LOGO_URL} alt="logo" style={{width : "100px"}}/>
            <h4 className="copyright">© {new Date().getFullYear()} My Food Ordering App Limited</h4>
        </div>
    )
}

export default Footer;