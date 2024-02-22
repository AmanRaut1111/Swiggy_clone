
import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
    console.log("header is render");
    const [btnReact, setbtnReact] = useState('Login')


    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>cart</li>
                    <button className="login-btn" onClick={() => {
                        btnReact === "Login" ? setbtnReact("Logout") : setbtnReact("Login")
                        console.log(btnReact);
                    }}>{btnReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;