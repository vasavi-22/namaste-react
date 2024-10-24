import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../utils/DarkModeContext";
import dark from "../../images/dark-mode.webp";
import light from "../../images/light-mode.webp";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");
    console.log("header rendered");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    // subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div 
            // className="logo-container"
            className="px-28 m-4"
            >
                <img className="w-14" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex gap-3 p-4 m-4 px-20">
                    <li className="px-4 text-lg font-semibold">Online Status : {onlineStatus ? "on" : "off"}</li>
                    <li className="px-4 text-lg font-semibold"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> not a good way */}
                    <li className="px-4 text-lg font-semibold"><Link to="/about">About Us</Link></li>
                    <li className="px-4 text-lg font-semibold"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 text-lg font-semibold"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
                    <button className="login-btn"
                    onClick={() =>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li><img src={darkMode ? light : dark} width="30px" height="30px" style={{background: "none"}} onClick={handleClick}/></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;