import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagory = ({ data, showItems, setShowIndex, dummy}) => {

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // console.log("clicked");
        // setShowItems(!showItems);
        setShowIndex();

    }

    return(
        <div>
            {/* Header  */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between" 
                onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                    <span>|</span>
                </div>

                {showItems && <ItemList items={data?.itemCards} dummy={dummy}/>}
            </div>

            {/* Accordion body  */}

        </div>
    );
};


export default RestaurantCatagory;