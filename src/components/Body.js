import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // local state variable - superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // normal js variable
    // let listOfRestaurants = [];

    return(
        <div className="body">
            <div className="filter">
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
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }                                                                                                                                                                           
            </div>
        </div>
    );
};

export default Body;