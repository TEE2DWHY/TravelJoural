import React from "react";
import "./index.css"

function Navbar() {
    return (
        <>
            <div className="nav-container">
                <img src="internet.png" style={{ width: "30px", height: "30px" }} /><span className="nav-text">my travel journal</span>
            </div>
        </>
    )
}

export default Navbar;