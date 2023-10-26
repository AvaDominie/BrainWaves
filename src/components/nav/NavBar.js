

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return ( <ul className="navbar">
        <li className="navbar-item">
            <Link to="/profile">Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to="/friends">Add Friends</Link>
        </li>
        <li className="navbar-item">
            <Link to="/artists">Artists</Link>
        </li>
        <li className="navbar-item">
            <Link to="/about">About BrainWave</Link>
        </li>
        {localStorage.getItem("brainWave_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to="/login"
                    onClick={() => {
                        localStorage.removeItem("brainWave_user")
                        navigate("/", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        ) : (
            ""
        )}
    </ul>
    )
}

