import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnReact, setbtnReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    useEffect(() => { }, []);
    // subscribing to the store using selector

    const cartItem = useSelector((store) => store.cart.items);

    console.log(cartItem);


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        {" "}
                        {onlineStatus ? <span> Online🟢 </span> : <span> Offline 🔴</span>}
                    </li>
                    <li>
                        <Link to="/" className="Link">
                            Home
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link className="Link" to="/about">
                            {" "}
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className="Link" to="/contact">
                            contact us
                        </Link>
                    </li>

                    <li> <Link to={"/cart"} className="Link">cart {cartItem.length}</Link></li>

                    <button
                        className="login-btn"
                        onClick={() => {
                            btnReact === "Login"
                                ? setbtnReact("Logout")
                                : setbtnReact("Login");
                            console.log(btnReact);
                        }}
                    >
                        {btnReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
