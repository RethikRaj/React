import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserCardClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child Constructor");
        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount(){
        console.log("Child Component Did Mount");

        try{
            const data = await fetch(GITHUB_USER_API+this.props.userName)

            const json = await data.json();

            this.setState({
                userInfo : json
            })
            console.log(json);
        }catch(err){
            console.error(err.message);
        }
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }

    componentWillUnmount(){
        console.log("Component Unmounted");
    }

    render(){
        console.log("Child Render");

        if(Object.keys(this.state.userInfo).length === 0){
            return (<div>User Info not yet Fetched</div>);
        }

        const {name,location} = this.state.userInfo;
        return (
            <div className="border-2 border-[#ccc] p-4 m-2 rounded-lg"> 
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

export default UserCardClass;