import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    console.log(resData.info,"ressssssssssss");

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;
    return(
        <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200" 
        // style={{backgroundColor: "#f0f0f0"}}
        >
            <img className="rounded-lg" alt="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    ); 
};

// high order component
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;