import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {

                avatar_url: "djvigjoieprgjoiergjoierjgoiergeregrgeger",
                name: "dummy",
                location: "default",


            },
        };


        console.log("constructor is called");
        console.log(this.state.userInfo);
    }

    async componentDidMount() {
        console.log("component did munt is called");
        const result = await fetch("https://api.github.com/users/AmanRaut1111");

        const data = await result.json();



        this.setState({ userInfo: data });

        console.log(this.state.userInfo);
    }

    componentDidUpdate() {
        console.log("update is called");
    }

    render() {

        console.log(this.props.name + " child render is called");

        const { name, address, contact } = this.props;

        console.log("render is called");
        return (
            <div className="user-card">
                {/* <img src={this.state.userInfo.avatar_url} /> */}
                <h2> Name:{this.state.userInfo.name}</h2>

                <h3> address:{this.state.userInfo.type}</h3>
                <h3>contcat:{contact}</h3>
            </div>
        );
    }
}

export default UserClass;
