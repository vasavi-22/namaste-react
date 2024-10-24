import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext, useRef} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import WhatsOnYourMind from "./WhatsOnYourMind";

const Body = () => {
    // local state variable - superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [woym, setWoym] = useState([]);
    const [topRestaurants, setTopRestaurants] = useState([]);
    
    const [page, setPage] = useState(1); // to track current page
    const [hasMore, setHasMore] = useState(true); // to check if more data is available

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
        // console.log("useeffect called");
        setTimeout(() => {
            fetchData(page);
        },5000);
    },[]);

    const fetchData = async (page) => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7399968&lng=83.32718&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}`
        );
        const json = await data.json();
        console.log(json.data);
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
        setWoym(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        console.log(woym);
        setTopRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        const newRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        // setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        if(newRestaurants.length === 0){
            setHasMore(false);  // stop fetching if no more restaurants are available
        }
    };

    const observer = useRef();
    const lastRestaurantRef = (node) => {
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore){
                setPage((prevPage) => prevPage + 1);
            }
        });

        if(node) observer.current.observe(node);
    }

    // console.log(useState(),"consoling useState()");

    // conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection;</h1>

    // console.log("body rendered");
    console.log(filteredRestaurants);

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) :(
        <div 
        // className="body"
        className="m-10 px-36"
        >
            {/* <div>
                <h1 className="font-bold text-2xl px-10 py-6">What's on your mind?</h1>
                <div className="flex flex-wrap gap-2.5">
                    {woym.slice(0,7).map((i,index) => (
                        <img key={i.id} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${i?.imageId}`} alt="image" width="150px" height="150px" />
                    ))}
                </div>
            </div> */}
            <WhatsOnYourMind woym={woym}/>
            <div>
                <h1 className="font-bold text-2xl px-10 py-6">Top restaurant chains in your location</h1>
                <div className="flex flex-wrap gap-0">
                    {
                        topRestaurants.map((restaurant) => (
                            <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                            {
                                restaurant?.info?.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
                            }
                            </Link>
                        ))
                    }
                </div>
            </div>
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
                        // console.log(searchText);
                        // console.log(listOfRestaurants,"*****");
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
            <h1 className="font-bold text-2xl px-10 py-6">Restaurants with online food delivery in your location</h1>
            <div 
            // className="res-container"
            className="flex flex-wrap gap-0"
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
                {/* Attach observer to the last restaurant card  */}
                <div ref={lastRestaurantRef}></div>                                                                                                                                                                    
            </div>
        </div>
    );
};

export default Body;