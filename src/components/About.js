import User from './User'

import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props)


        console.log(" parent constructor is called");
    }


    componentDidMount() {
        console.log("parent componentDidMount called");
    }
    render() {

        console.log("parent render is called");
        return (
            <div>
                <h1> This is About Page By Namste React</h1>
                {/* <User
                    name={"Aman Raut  ( functional)"}
                    address={"gokak"}
                    contact={"8856051111"}
                /> */}
                <UserClass
                    name={"Aman Raut (class)"}
                    address={"pune"}
                    contact={"8180090786"}
                />
            </div>
        );
    }
}



// const About = () => {
//   return (
//     <div>
//       <h1> This is About Page By Namste React</h1>
//       <User
//         name={"Aman Raut  ( functional)"}
//         address={"gokak"}
//         contact={"8856051111"}
//       />
//       <UserClass
//         name={"Aman Raut (class)"}
//         address={"pune"}
//         contact={"8180090786"}
//       />
//     </div>
//   );
// };

export default About;
