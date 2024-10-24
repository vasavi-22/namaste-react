import { IMG_CDN_URL, IMG_URL } from "../utils/constants";
import img from "../../images/rating-circled-64.png";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData.info,"ressssssssssss");

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, areaName } =
    resData?.info;
  return (
    <div
      className="p-4"
      // className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={{backgroundColor: "#f0f0f0"}}
    >
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
        style={{
          width: "250px",
          height: "170px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      />
      <div className="py-3 px-3">
        <h3 className="font-bold text-lg"
          title={name.length>20 ? name : ''}
        >
          {name.length > 20 ? `${name.substring(0,20)}...` : name}
        </h3>
        <span><img src={img} height="30px" width="25px" style={{display:"inline-block"}}/><span className="font-semibold">{avgRating} . {sla.slaString}</span></span>
        <h4 className="text-gray-500">{cuisines.join(", ").length > 20 ? `${cuisines.join(", ").slice(0,20)}...` : cuisines.join(", ")}</h4>
        <h4 className="text-gray-500">{areaName}</h4>
      </div>
    </div>
  );
};

// high order component
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
