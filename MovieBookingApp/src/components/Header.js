import logo from "../utils/images/image.png";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="search">
                search
            </div>
            <div className="location-login-btn-container">
                <p className="location">Location</p>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default Header;