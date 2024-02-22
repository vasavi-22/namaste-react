import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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


const styleCard = {
    backgroundColor: "#f0f0f0",
};

// const RestaurantCard({resName, cuisne}){}   -- this is called destructuring on the fly
// how the restaurant data come from backend -- json format


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