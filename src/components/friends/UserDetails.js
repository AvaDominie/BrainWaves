
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getUser, UserLikedArtist } from "../../services/userService"




export const UsersDetails = () => {

    const [users, setUsers] = useState([])
    const [likedArtists, setLikedArtists] = useState([])
    const { userId } = useParams()


    useEffect(() => {
        getUser(userId).then((data) => {
            setUsers(data)
        })

        UserLikedArtist(userId).then((data) => {
            setLikedArtists(data)
        })

    }, [userId])


    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>

                    <section className="user-info-picture">
                        <img className="user-picture" src={user.profilePictureURL} alt={user.name} />
                    </section>

                    <section className="user-info-bio">
                        <h1>Bio</h1>
                        <p className="user-bio">{user.bio}</p>
                    </section>

                    <section className="user-liked-artists">
                        <h1>Liked Artists</h1>
                        <br />
                        {likedArtists.map((liked) => (
                            <div key={liked.id}>
                                <Link to={`/artists-details/${liked.artist.id}`}>
                                    <div>{liked.artist.name}</div>
                                </Link>
                                <img className="artistList-pic" src={liked.artist.artistPictureURL} alt={liked.artist.name} />
                                <div>Genre: {liked.artist.genre}</div>

                                <hr></hr>

                            </div>
                        ))}

                    </section>

                </div>

            )

            )}
        </div>
    )
}