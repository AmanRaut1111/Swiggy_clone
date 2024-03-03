import User from "./User";

import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {

        return (
            <div>

                <h1> This is About Page By Namste React</h1>

                <div>
                    <UserContext.Consumer>
                        {(data) => data.loggedInUser}
                    </UserContext.Consumer>
                </div>
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
