import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // local state variable - superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // normal js variable
    // let listOfRestaurants = [];

    const [searchText, setSearchText] = useState("");
    // whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

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
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange = {(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={() => {
                        // filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        const filteredRestaurants = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);

                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                    ))
                }                                                                                                                                                                           
            </div>
        </div>
    );
};

export default Body;