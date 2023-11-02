

import "./User.css"
import { Link } from 'react-router-dom'


export const AllUsers = ({ user }) => {
    
    
    return (
        <div key={user.id}>
            <img className="pfp-url" src={user.profilePictureURL} alt={user.name} />
            <Link to={`/users-details/${user.id}`}>
            <h2>{user.name}</h2>
            </Link>
            <p>Genre: {user.genre}</p>
            </div>
    )


}