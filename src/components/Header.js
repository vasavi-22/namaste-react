import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");
    console.log("header rendered");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "on" : "off"}</li>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> not a good way */}
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn"
                    onClick={() =>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;