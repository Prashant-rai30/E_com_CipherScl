import React from "react"
import "./Navbar.css"
import logo from "../../images/navbar/logo.png"
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate5 = useNavigate();
    return (
        <div className="nav_container">
            <div className="nav_left">
                <img src={logo} alt="logo" />

            </div>
            <div className="nav_right">
                <input type={"text"} placeholder="Search you items" />
                <p>My Orders</p>

                <p onClick={() => navigate5('sign-up')}>SignUp</p>

                <p>Contact Us</p>

            </div>
        </div>
    )
}
export default Navbar 