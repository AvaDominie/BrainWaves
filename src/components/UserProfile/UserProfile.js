
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUser, updateUser } from "../../services/userService"
import { useNavigate } from "react-router-dom"


export const UserProfile = ({ currentUser }) => {
    const [user, setUser] = useState({})
    const { userId } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        getUser(userId).then((data) => {
            const userObj = data[0]
            setUser(userObj)
            console.log("User:", userId)
            console.log("User Data:", userObj)
        })
    }, [userId])

    // updateUser(currentUser).then(() => {

    //     navigate(`/profile/${currentUser}`)
    // })

    return (
        // <h1>Welcome {user.name}</h1>
        <div>
            {/* Display artists picture, name, genre, and unlike button */}
            <section className="user-info-liked">
                <h1>Liked Artists</h1>
                
            </section>

            {/* Display firends picture, name, and unfriend button */}
            <section className="user-info-friends">
                <h1>Friends</h1>
            </section>

            {/* Display Picture */}
            <section className="user-info-picture">

            </section>

            {/* Display bio */}
            <section className="user-info-bio">
                <h1>Bio</h1>
                {/* {user.bio} */}
            </section>

            {/* Display edit button */}
            <section className="user-info-edit-btn">

            </section>
        </div>
    )
}
