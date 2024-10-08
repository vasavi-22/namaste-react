import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {
    // console.log(items,"itemsssssssssssss");
    // console.log(dummy);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }


    return(
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - &#8377;{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-10 rounded-lg bg-black text-white shadow-lg"
                            onClick={() => handleAddItem(item)}> Add + </button>
                        </div>
                        {
                            item.card.info.imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} /> : 
                            <img src="https://www.teahub.io/photos/full/253-2538486_slider3-restaurant-food-pic-hd.jpg" />
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;