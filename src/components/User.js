import { useState } from "react";

const User = (props) => {

    let [count, setCount] = useState(0)
    const { name, address, contact } = props
    return (
        <div className="user-card">


            <button onClick={() => {

                setCount(count - 1)
            }}>   count ibcrement </button>
            <h2> Name:{name}</h2>
            <h2> count:{count}</h2>
            <h3> address:{address}</h3>
            <h3>contcat:{contact}</h3>
        </div>
    );
};

export default User
