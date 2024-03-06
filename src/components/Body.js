import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    // local state variable - superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // normal js variable
    // let listOfRestaurants = [];

    const [searchText, setSearchText] = useState("");
    // whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

    // if no dependency array => useeffect is called on every render
    // if the dependency array is empty => [] => useeffect called on initial render (just once)
    // if dependency array [btnName] => called everytime btnName is updated
    useEffect(() => {
        console.log("useeffect called");
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7399968&lng=83.32718&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    console.log(useState(),"consoling useState()");

    // conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection;</h1>

    console.log("body rendered");

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    // className="search-box" 
                    className="border border-solid border-black"
                    value={searchText}
                    onChange = {(e) => setSearchText(e.target.value)}
                    />
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        // filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        console.log(listOfRestaurants,"*****");
                        const filteredRestaurants = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                    // className="filter-btn" 
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input 
                    className="border border-black p-2"
                    value = {loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                    /> 
                    {/* if i change the userName here, my user context data should change */}
                </div>
            </div>
            <div 
            // className="res-container"
            className="flex flex-wrap"
            >
                {
                    filteredRestaurants.map((restaurant) => (
                        // if the restaurant is promoted, then add a promoted label to it
                        <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                            {/* <RestaurantCard resData={restaurant} /> */}
                            {
                                restaurant?.info?.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
                            }
                        </Link>
                    ))
                }                                                                                                                                                                           
            </div>
        </div>
    );
};

export default Body;