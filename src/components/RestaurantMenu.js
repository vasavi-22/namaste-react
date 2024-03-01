import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const [showIndex, setShowIndex] = useState(0);

    const data = "dummy data";

    const {resId} = useParams();
    console.log(resId);

    // const resInfo = useRestaurantMenu(resId);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        
        console.log(json.data,"jlkkkkkkkkkkk");
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(catagories)

    // console.log(itemCards);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}
            </p>

            {/* catagories accordions */}
            {catagories.map((catagory, index) => (
                <RestaurantCatagory 
                key={catagory?.card?.card?.title} 
                data = {catagory?.card?.card} 
                showItems={ index === showIndex ? true : false}   // now it is a controlled component
                setShowIndex = {() => setShowIndex(index)}
                dummy = {data}
                /> 
            ))}


            {/* <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" RS."} {item.card.info.price / 100}
                    </li>)
                )}
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;