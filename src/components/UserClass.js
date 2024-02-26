import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);

        // this.state = {
        //     count : 0,
        //     count2 : 1,
        // };

        // console.log(this.props.name+" constructor");

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "default",
            }
        }
    }

    async componentDidMount(){
        // console.log(this.props.name+" child component did mount");

        // API CALL
        const data  = await fetch("https://api.github.com/users/vasavi-22");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })

        console.log(json);

        this.timer = setInterval(() => {
            console.log("Namaste react OP");
        },1000);

    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }

    render(){
        // console.log(this.props.name+" render");

        // const {name, location} = this.props;
        // const {count, count2}  = this.state;

        const {name, location, avatar_url} = this.state.userInfo;
        // debugger;  for debugging purpose
        return(
            <div className="user-card">

                {/* <h1>Count : {count}</h1>
                <button onClick={() => {
                    // never update state variables directly
                    // this.state.count = this.state.count + 1;

                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 - 1,
                    });
                }}>Count Increase</button>
                <h1>Count2 : {count2}</h1> */}

                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3> 
                <h4>Contact : @vasavi-22</h4>
            </div>
        );
    }
}

export default UserClass;

/***
----mounting
constructor ( dummy)
render (dummy)
 <HTML DUMMY>
Component did mount
 < API CALL>
 < this.setState> => state variable updated
----update
 render (api data)
 <html (new api data)>
 component did update
*/