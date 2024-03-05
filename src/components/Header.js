import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login");
    console.log("header rendered");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-14" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "on" : "off"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> not a good way */}
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
                    <button className="login-btn"
                    onClick={() =>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;