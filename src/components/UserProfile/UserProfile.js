
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserLikedArtist, getUser } from "../../services/userService"
// import { useNavigate } from "react-router-dom"


export const UserProfile = () => {
    const [user, setUser] = useState({})
    const [likedArtists, setLikedArtists] = useState([])
    const { userId } = useParams()




    useEffect(() => {
        getUser(userId).then((data) => {
            const userObj = data[0]
            setUser(userObj)
        })

        UserLikedArtist(userId).then((data) => {
            setLikedArtists(data)

        })

    }, [userId])




    // service http://localhost:8088/artistsLiked?_expand=user&_expand=artist
    // set state for user likes http://localhost:8088/artistsLiked/?userId=2&_expand=artist
    // 
    // <img className="artistList-pic" src={liked.artist.?artistPictureURL} alt={liked.name} />
    // .filter 
    return (
        <div>
            <h1 className="welcome-profile">Welcome {user.name}</h1>

            {/* Display Picture */}
            <section className="user-info-picture">
                <img className="user-picture" src={user.profilePictureURL} alt={user.name} />
            </section>

            {/* Display bio */}
            <section className="user-info-bio">
                <h1>Bio</h1>
                {user.bio}
            </section>

            {/* Display artists picture, name, genre, and unlike button */}

            <section className="user-info-liked">
                <h1>Liked Artists</h1>
                {/* .map getinto the  */}
                {likedArtists.map((liked) => {
                    return (
                        <div key={user.id}>
                            <div>{liked.artist?.name}</div>
                            <p>Genre: {liked.artist?.genre}</p>
                            <button className="Unlike-btn">Unlike</button>
                            {/* 
                    */}
                            <h1>_________________________________________________________________________________________________________________________________________________</h1>
                        </div>
                    )
                })}
            </section>

            {/* Display firends picture, name, and unfriend button */}
            <section className="user-info-friends">
                <h1>Friends</h1>
            </section>


          {/* Display edit button */}
            <section className="user-info-edit-btn">

            </section>
        </div>
    )
}
