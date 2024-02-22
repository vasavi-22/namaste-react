import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    ); 
};

export default RestaurantCard;