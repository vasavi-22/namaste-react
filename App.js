import React from "react";
import ReactDOM from "react-dom/client";

//  <div id="parent">
//     <div id="child">
//         <h1>I'm an h1 tag</h1>
//         <h2>I'm an h2 tag</h2>
//     </div>
// </div> 
// ReactElement(Object) => HTML (Browser Understands)

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")]
//     ),
//     React.createElement(
//         "div",
//         {id:"child2"},
//         [React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")]
//     )]
// )

// const heading = React.createElement("h1",
// {id: "heading", xyz:"abc"},
// "Hello World! form React"
// );

// console.log(heading); // object

// JSX

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

/// root.render(heading);
// root.render(parent);

// ReactElement is different from HTML Element
// ReactElement => Object => (After rendering) HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// console.log(heading);

// JSX => It is a javascript syntax easier to create html elements
// React is different and JSX is different
// JSX is a convention that has javascript and html
// JSX is not html, it's a html-like or xml-like syntax

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// babel comes with parcel

const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
)

// React Functional Component
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// };
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// render method will replace what is there inside the root with the heading
// root.render(heading);

// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React Using JSX
//     </h1>
// );

//component composition
// const HeadingComponent = () => (
//     <div id="container">
//         {/* {title} */}
//         {/* {Title()} */}
//         <Title />
//         {/* <Title></Title> */}
//         <h1>{console.log("jfdshfjsdhfdsjhds")}</h1>
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );



/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

// const RestaurantCard({resName, cuisne}){}   -- this is called destructuring on the fly
// how the restaurant data come from backend -- json format

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo /100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    ); 
};

const resList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "73011",
        name: "KFC",
        uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["American", "Snacks", "Biryani"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 6.199999809265137,
        slugs: {
          restaurant: "kfc-chukkuwala-chukkuwala",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
        locality: "Clock Tower",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "73011",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 6.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "542132",
        name: "Domnik Pizza",
        uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
        city: "22",
        area: "Majra    Bansal Home",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
        locality: "Patel Nagar",
        parentId: 22321,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "542132",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "321517",
        name: "FOOD PLANET RESTAURANT",
        uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
        city: "22",
        area: "Majra",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "ykboewqeoxnne8fgrnui",
        cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
        locality: "Patel Nagar",
        parentId: 81850,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "321517",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311806",
        name: "Burger King",
        uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "burger-king-chakrata-road-ballupur",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
        locality: "CHAKRATA ROAD",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311806",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "132460",
        name: "Annapurna Andhra Mess",
        uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
        city: "22",
        area: "Dehradun",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
        cuisines: ["South Indian", "Biryani", "North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
        locality: "Patel Nagar",
        parentId: 33997,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "132460",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "496677",
        name: "Uncle Ji Restaurant",
        uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
        city: "22",
        area: "Patel Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
        cuisines: ["North Indian", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 0.800000011920929,
        slugs: {
          restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address: "348 santosh tower, majra road gram majra dehradun 248001",
        locality: "Patel Nagar",
        parentId: 298209,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "496677",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 0.800000011920929,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
  ];

const Body = () => {
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }                                                                                                                                                                           
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
