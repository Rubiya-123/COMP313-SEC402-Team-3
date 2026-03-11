import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav style={styles.nav}>
            <div style={styles.logo} onClick={() => navigate("/")}>
                TOYOTA
            </div>

            <div>
                <button style={styles.button} onClick={() => navigate("/")}>
                    Browse Vehicles
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/manage-vehicles")}
                >
                    Manage Vehicle
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/inquiries")}
                >
                    Manage Request
                </button>

                <button style={styles.sign}>Hello, Sign In</button>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "black",
        color: "white",
        alignItems: "center"
    },
    logo: {
        fontSize: "22px",
        fontWeight: "bold",
        cursor: "pointer"
    },
    button: {
        marginRight: "10px",
        padding: "8px 15px",
        background: "#e4002b",
        border: "none",
        color: "white",
        cursor: "pointer"
    },
    sign: {
        padding: "8px 15px"
    }
};

export default Navbar;