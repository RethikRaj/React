import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import { Component } from "react";

class AboutUsClass extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent render");
        
        return (
            <div>
                <h1>About Us Class </h1>
                <h3>This is a Food Ordering App </h3>
                <UserCardClass userName = {"RethikRaj"}/>
                <UserCardClass userName = {"akshaymarch7"}/>
            </div>
        )
    }
}

export default AboutUsClass;

/**
 * <UserCardClass name={"First (Class)"} location={"Tamil Nadu"} contact={1234567890}/>
<UserCardClass name={"Second (Class)"} location={"Delhi"} contact={1234567891}/>
<UserCardClass name={"Third (Class)"} location={"Kerala"} contact={1234567892}/>
 */


// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>This is a Food Ordering App </h3>
//             <UserCard name={"Rethik Raj (Function)"} location={"Tamil Nadu"} contact={1234567890}/>
//             <UserCardClass name={"Rethik Raj (Class)"} location={"Tamil Nadu"} contact={1234567890}/>
//         </div>
//     )
// }

// export default AboutUs;