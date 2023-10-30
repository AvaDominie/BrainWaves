

// import { Link } from "react-router-dom"
import "./User.css"


export const AllUsers = ({ user }) => {
    
    
    return (
        <div key={user.id}>
            <img className="pfp-url" src={user.profilePictureURL} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Genre: {user.genre}</p>
            <button className="like-btn">Like</button>
            <h1>_________________________________________________________________________________________________________________________________________________</h1>
        </div>
    )


}