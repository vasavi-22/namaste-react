import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// chunking
// code splitting
// dynamic bundling
// lazy loading (on demand loading) -- here, initially we are not going to load grocery. It loads when we move to Grocery
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

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
            {/* <Body /> */}
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
