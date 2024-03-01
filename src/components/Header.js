import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
    const [btnReact, setbtnReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    useEffect(() => { }, []);

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

                    <li>cart</li>
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
