
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserAddedFriend, UserLikedArtist, getUser, UnlikeArtist, unfriendUser } from "../../services/userService"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



export const UserProfile = () => {
    const [user, setUser] = useState({})
    const [likedArtists, setLikedArtists] = useState([])
    const [addedFriends, setAddedFriends] = useState([])
    // const [userfriends, setUserFriends] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()
    // const [foundFriend, setFoundFriend] = useState({})



    useEffect(() => {
        getUser(userId).then((data) => {
            const userObj = data[0]
            setUser(userObj)
        })

        UserLikedArtist(userId).then((data) => {
            console.log("liked data", data)
            setLikedArtists(data)
        })

        UserAddedFriend(userId).then((data) => {
            console.log("friend data", data)
            setAddedFriends(data)
        })



    }, [userId])






    const LinktoEditForm = () => {
        navigate(`/edit-profile/${userId}`)
    }






    const handleUnlike = (likedId) => {

        console.log("like id", likedId)

        UnlikeArtist(likedId).then(() => {
            // Remove the unliked artist from the likedArtists state
            setLikedArtists((prevLikedArtists) => prevLikedArtists.filter((artist) => artist.id !== likedId))
        })
    }


    const handleUnfriend = (friendId) => {
        console.log("friend id", friendId)

        unfriendUser(friendId).then(() => {
            // Remove the unliked artist from the likedArtists state
            setAddedFriends((prevLikedArtists) => prevLikedArtists.filter((friend) => friend.id !== friendId))
        })


        // // Find the friend with the matching id
        // const foundFriendData = addedFriends.find((friend) => friend.friendsId === friendId)
        // console.log("this is addedFriends", addedFriends)

        // if (foundFriendData) {
        //     // If the friend is found, unfriend the user
        //     unfriendUser(foundFriendData.id).then(() => {
        //         // Remove the friend relationship from friends state
        //         setAddedFriends((prevAddedFriends) => {
        //             const updatedFriends = prevAddedFriends.filter((friend) => friend.id !== foundFriendData.id)
        //             console.log(updatedFriends)
        //             return updatedFriends
        //         })
        //     })
        // } else {
        //     // If the friend is not found, log an error message
        //     console.error('Friend not found:', friendId)
        // }
    }


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
                <p className="user-bio">{user.bio}</p>
            </section>

            {/* Display artists picture, name, genre, and unlike button */}
            <section className="user-info-liked">
                <h1>Liked Artists</h1>

                {likedArtists.map((liked) => (
                    <div key={liked.id}>
                        <Link to={`/artists-details/${liked.artist.id}`}>
                            <div>{liked.artist.name}</div>
                        </Link>
                        
                        <img className="artistList-pic" src={liked.artist.artistPictureURL} alt={liked.artist.name} />
                        <br/>
                        <br/>
                        <div>Genre: {liked.artist.genre}</div>
                        <br/>

                        <button className="Unlike-btn" onClick={() => handleUnlike(liked?.id)}>Unlike</button>
                        <hr></hr>
                        <br />
                    </div>
                ))}
                <br />
                <br />
            </section>

            {/* Display friends' picture and name */}
            <section className="user-info-friends">
                <h1>Friends</h1>
                {addedFriends.map((friend) => (
                    <div key={friend.user.id}>
                        <img className="pfp-url" src={friend.user.profilePictureURL} alt={friend.user.name} />
                        <Link to={`/users-details/${friend.user.id}`}>
                            <h2>{friend.user.name}</h2>
                        </Link>

                        <button className="Unlike-btn" onClick={() => handleUnfriend(friend?.id)}>Unfriend</button>
                        <hr></hr>
                    </div>
                ))}
            </section>

            {/* Display edit button */}
            <button className="user-info-edit-btn" onClick={LinktoEditForm}>Edit</button>
        </div>
    )
}

