import React from "react";
import "./index.css"

const Year = new Date().getFullYear()

function Footer() {
    return (
        <>
            <p style={{ textAlign: "center" }}>
                Copyright {Year} <br />
                <em>Olorunfemi Tayo</em>
            </p>
        </>
    )
}

export default Footer