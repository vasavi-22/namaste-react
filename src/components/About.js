import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);

        console.log("constructor parent")
    }

    componentDidMount(){
        console.log("parent component did mount");
    }

    render(){
        console.log("render parent");

        return(
                <div>
                    <h1>About</h1>
                    <h2>this is namaste react web series</h2>
                    <User name={"Vasavi Kasireddi"}/>
                    {/* <UserClass name={"first"} location = {"Vizag (class)"}/> */}
                    {/* <UserClass name={"second"} location = {"Vizag (class)"}/> */}
                </div>
            ); 
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>this is namaste react web series</h2>
//             {/* <User name={"Vasavi Kasireddi"}/> */}
//             <UserClass name={"Vasavi Kasireddi (class)"} location = {"Vizag (class)"}/>
//         </div>
//     );
// };

export default About;



/** 
 * parent constructor
 * parent render
 *  - first child constructor
 *  - first child render
 * 
 *  - second constructor
 *  - second child
 * 
 *  DOM UPDATED IN SINGLE BATCH
 * 
 *  - first cmpt did mount
 *  - second cmpt did mount
 * 
 * parent cmpt did mount
 */